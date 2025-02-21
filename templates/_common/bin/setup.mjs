import * as fs from "fs";
import * as path from "path";
import ejs from "ejs";
import { log } from "@politico/hermes";

const rootDir = process.cwd();

const EXCLUDED_DIRECTORIES = new Set([
  ".github",
  ".git",
  "node_modules",
  "dist",
]);

const LATEST_DEPENDENCIES = ["@politico/hermes", "@politico/lambda"];

const projectName = (() => {
  const cwdName = path.basename(process.cwd());
  const underscoreIndex = cwdName.indexOf("_");
  if (underscoreIndex === -1) {
    return cwdName;
  }

  return cwdName.substring(underscoreIndex + 1);
})();

const TEMPLATE_DATA = {
  projectSlug: projectName,
  projectName: [
    projectName[0].toLocaleUpperCase(),
    ...projectName.substring(1),
  ].join(""),
  year: new Date().getFullYear(),
};

function processDirectoryForEJS(dirPath) {
  const dirents = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const dirent of dirents) {
    const fullPath = path.join(dirPath, dirent.name);

    if (dirent.isDirectory() && !EXCLUDED_DIRECTORIES.has(dirent.name)) {
      processDirectoryForEJS(fullPath);
    }

    if (dirent.isFile()) {
      processEjsFile(fullPath);
    }
  }
}

function processEjsFile(filePath) {
  ejs.renderFile(filePath, TEMPLATE_DATA, {}, (err, renderedContent) => {
    if (err) {
      log.error(`Error rendering EJS file: ${filePath}`, err);
      return;
    }

    fs.writeFileSync(filePath, renderedContent, "utf8");
  });
}

async function getLatestNonBetaVersion(name) {
  try {
    const response = await fetch(`https://registry.npmjs.org/${name}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch package info: ${response.statusText}`);
    }

    const data = await response.json();
    const versions = Object.keys(data.versions).reverse();
    let latestNonBetaVersion = data["dist-tags"].latest;

    for (const v of versions) {
      if (!v.includes("beta") && !v.includes("alpha")) {
        latestNonBetaVersion = v;
        break;
      }
    }

    return latestNonBetaVersion;
  } catch (error) {
    throw new Error(`Error fetching package info: ${error.message}`);
  }
}

async function updateDependencies(dependenciesToUpdate) {
  const packageJsonPath = path.join(process.cwd(), "package.json");

  try {
    const packageJsonData = await fs.promises.readFile(packageJsonPath, "utf8");
    const packageJson = JSON.parse(packageJsonData);

    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    for (const dep of dependenciesToUpdate) {
      if (dependencies[dep]) {
        const latestVersion = await getLatestNonBetaVersion(dep);
        if (latestVersion) {
          dependencies[dep] = `^${latestVersion}`;
          log.info(`Updated ${dep} to version ^${latestVersion}`);
        }
      } else if (devDependencies[dep]) {
        const latestVersion = await getLatestNonBetaVersion(dep);
        if (latestVersion) {
          devDependencies[dep] = `^${latestVersion}`;
          log.info(
            `Updated ${dep} to version ^${latestVersion} (devDependency)`
          );
        }
      } else {
        log.warning(`Dependency ${dep} not found in package.json`);
      }
    }

    // Write updated package.json back
    await fs.promises.writeFile(
      packageJsonPath,
      JSON.stringify(
        {
          ...packageJson,
          dependencies,
          devDependencies,
          ...{ name: TEMPLATE_DATA.projectSlug },
        },
        null,
        2
      ),
      "utf8"
    );

    log.success("package.json updated successfully!");
  } catch (error) {
    log.error(`Error updating dependencies: ${error.message}`);
  }
}

async function updateLatestNodeVersion(majorVersion) {
  try {
    const response = await fetch("https://nodejs.org/dist/index.json");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch Node.js versions: ${response.statusText}`
      );
    }

    const versions = await response.json();

    const nodeVersions = versions
      .map((v) => v.version)
      .filter((v) => v.startsWith(`v${majorVersion}.`))
      .sort()
      .reverse();

    if (nodeVersions.length === 0) {
      throw new Error(`No Node.js v${majorVersion} versions found.`);
    }

    const latestVersion = nodeVersions[0].replace("v", "");

    const nvmrcPath = path.join(process.cwd(), ".nvmrc");

    await fs.promises.writeFile(nvmrcPath, latestVersion + "\n", "utf8");
    log.info(`Updated .nvmrc to Node.js v${latestVersion}`);
  } catch (error) {
    log.error(
      `Error fetching/updating Node.js v${majorVersion} version: ${error.message}`
    );
  }
}

// Run Setup
(async () => {
  log.info("Starting setup scripts...");

  const pkgJsonText = await fs.readFileSync(
    path.join(process.cwd(), "package.json")
  );
  const pkg = JSON.parse(pkgJsonText);

  if (pkg.setup) {
    log.success(
      'Repo already setup. To setup again, change "setup" in package.json to false.'
    );
    return;
  }

  processDirectoryForEJS(rootDir);
  log.success(`Finished processing template strings in: ${rootDir}`);

  updateDependencies(LATEST_DEPENDENCIES);
  updateLatestNodeVersion("22");
})();
