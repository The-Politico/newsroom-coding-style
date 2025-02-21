#!/usr/bin/env node
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import * as diff from 'diff';
import { log } from '@politico/hermes';

// Constants for target repository and branch
const TARGET_BRANCH = 'develop';
const TARGET_REPO = 'The-Politico/newsroom-coding-style';

function getBaseUrl() {
  return `https://raw.githubusercontent.com/${TARGET_REPO}/refs/heads/${TARGET_BRANCH}/templates`;
}

// Utility: fetch JSON from URL
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  return res.json();
}

// Utility: fetch text from URL, return null if not found
async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) return null;
  return res.text();
}

// Compare local and target contents, display diff (only adds/removes), and prompt update.
// Returns true if an update was made.
async function diffAndPrompt(filePath, localContent, targetContent) {
  if (localContent === targetContent) {
    log.info(`${filePath} is already up-to-date.`);
    return false;
  }

  log.info(`Differences for ${filePath}:`);
  const changes = diff.diffLines(localContent, targetContent);
  changes.forEach(part => {
    if (part.added || part.removed) {
      const symbol = part.added ? '+' : '-';
      const color = part.added ? '\x1b[32m' : '\x1b[31m';
      part.value.split('\n').forEach(line => {
        if (line.trim() !== '') {
          console.log(color + symbol + ' ' + line + '\x1b[0m');
        }
      });
    }
  });
  console.log();

  const { update } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'update',
      message: `Update ${filePath}?`,
      default: false,
    },
  ]);
  if (update) {
    await fs.writeFile(filePath, targetContent);
    log.info(`${filePath} updated successfully.`);
    return true;
  }
  return false;
}

// For package.json sections, compare keys and prompt for changes.
// Returns true if any change was made.
async function processPackageSection(section, localPackage, targetPackage) {
  let changed = false;
  const localSection = localPackage[section] || {};
  const targetSection = targetPackage[section] || {};

  // Keys to add (missing locally)
  const keysToAdd = Object.keys(targetSection).filter(key => !(key in localSection));
  // Keys to update (present but with a different value)
  const keysToUpdate = Object.keys(targetSection).filter(key => key in localSection && localSection[key] !== targetSection[key]);

  for (const key of keysToAdd) {
    const { add } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'add',
        message: `Add new ${section} "${key}": "${targetSection[key]}"?`,
        default: false,
      },
    ]);
    if (add) {
      localSection[key] = targetSection[key];
      log.info(`Added ${section} "${key}".`);
      changed = true;
    }
  }

  for (const key of keysToUpdate) {
    const { update } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'update',
        message: `Update ${section} "${key}" from "${localSection[key]}" to "${targetSection[key]}"?`,
        default: false,
      },
    ]);
    if (update) {
      localSection[key] = targetSection[key];
      log.info(`Updated ${section} "${key}".`);
      changed = true;
    }
  }

  localPackage[section] = localSection;
  return changed;
}

// Process each file (script, config, or package)
async function processFile(templateId, item) {
  console.log();
  const { type, path: filePath, reset } = item;
  let fileUpdated = false;
  if (type === 'script' || type === 'config') {
    const targetContent = await getTargetContent(templateId, filePath);
    let localContent = '';
    if (existsSync(filePath)) {
      localContent = await fs.readFile(filePath, 'utf-8');
      fileUpdated = await diffAndPrompt(filePath, localContent, targetContent);
    } else {
      const { create } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'create',
          message: `${filePath} does not exist locally. Would you like to create it?`,
          default: false,
        },
      ]);
      if (!create) {
        log.info(`Skipping creation of ${filePath}`);
        return;
      } else {
        await fs.writeFile(filePath, targetContent);
        log.info(`${filePath} created.`);
        fileUpdated = true;
      }
    }
  } else if (type === 'package') {
    // Special handling for package.json
    const targetContentText = await getTargetContent(templateId, filePath);
    let targetPackage;
    try {
      targetPackage = JSON.parse(targetContentText);
    } catch (err) {
      throw new Error(`Target package.json is not valid JSON.`);
    }
    let localPackage;
    try {
      const localContent = await fs.readFile(filePath, 'utf-8');
      localPackage = JSON.parse(localContent);
    } catch (err) {
      throw new Error(`Failed to read local package.json.`);
    }
    // Process each section: scripts, dependencies, devDependencies
    const changedScripts = await processPackageSection('scripts', localPackage, targetPackage);
    const changedDependencies = await processPackageSection('dependencies', localPackage, targetPackage);
    const changedDevDependencies = await processPackageSection('devDependencies', localPackage, targetPackage);
    fileUpdated = changedScripts || changedDependencies || changedDevDependencies;
    if (fileUpdated) {
      await fs.writeFile(filePath, JSON.stringify(localPackage, null, 2));
      log.info(`${filePath} updated successfully.`);
    }
  }

  if (fileUpdated && reset) {
    log.info(`Critical file ${filePath} has been updated. Please run the migrate script again.`);
    process.exit(0);
  }
}

// Get target file content from template id and file path,
// appending a cache-break query param with the current ISO time.
async function getTargetContent(templateId, filePath) {
  const baseUrl = getBaseUrl();
  const timestamp = new Date().toISOString();
  let targetUrl = `${baseUrl}/${templateId}/${filePath}?t=${encodeURIComponent(timestamp)}`;
  let content = await fetchText(targetUrl);
  if (content === null) {
    // Fall back to _common
    targetUrl = `${baseUrl}/_common/${filePath}?t=${encodeURIComponent(timestamp)}`;
    content = await fetchText(targetUrl);
    if (content === null) {
      throw new Error(`File ${filePath} not found in template "${templateId}" or in _common`);
    }
  }
  return content;
}

// Read template ID from the current project's package.json (in template.id)
async function getTemplateId() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  if (!existsSync(pkgPath)) {
    throw new Error("No package.json found in the current directory.");
  }
  const pkgContent = await fs.readFile(pkgPath, 'utf-8');
  const pkg = JSON.parse(pkgContent);
  if (!pkg.template || !pkg.template.id) {
    throw new Error("template.id not found in package.json");
  }
  return pkg.template.id;
}

// Main function: entry point of the script.
async function main() {
  let templateId;
  try {
    templateId = await getTemplateId();
    log.info(`Using template id: ${templateId}`);
  } catch (err) {
    log.error("Error reading template id from package.json:", err.message);
    process.exit(1);
  }

  const confUrl = `${getBaseUrl()}/conf.json?t=${encodeURIComponent(new Date().toISOString())}`;
  let conf;
  try {
    conf = await fetchJson(confUrl);
  } catch (err) {
    log.error(`Error fetching configuration: ${err.message}`);
    process.exit(1);
  }
  for (const item of conf) {
    try {
      await processFile(templateId, item);
    } catch (err) {
      log.error(`Error processing "${item.path}": ${err.message}`);
    }
  }

  log.success('Migration complete');
}

main();
