import esbuild from 'esbuild';
import alias from 'esbuild-plugin-alias';
import process from 'node:process';

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    entryNames: '[dir]/[name]',
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'node18',
    outdir: 'deployment/<APP_SLUG>/dist',
    external: ['fsevents', 'typescript'],
    tsconfig: 'tsconfig.json',
    plugins: [
      alias({
        '~': './src',
      }),
    ],
  })
  .catch(() => process.exit(1));
