import esbuild from 'esbuild';
import alias from 'esbuild-plugin-alias';
import process from 'node:process';

esbuild
  .build({
    entryPoints: ['./bin/src/*.ts'],
    entryNames: '[dir]/[name]',
    bundle: true,
    platform: 'node',
    target: 'node18',
    outdir: 'bin/dist',
    external: ['fsevents', 'typescript'],
    plugins: [
      alias({
        '~': './src',
      }),
    ],
  })
  .catch(() => process.exit(1));