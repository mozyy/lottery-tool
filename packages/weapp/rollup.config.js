import typescript from '@rollup/plugin-typescript';
import { globSync } from 'glob';
import path from 'path';
/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: Object.fromEntries(globSync('src/**/*.{ts,tsx}').map((file) => [
    path.relative('src', file.slice(0, file.length - path.extname(file).length)),
    file,
  ])),
  plugins: [
    typescript({ allowImportingTsExtensions: true, noForceEmit: true }),
  ],
  output: {
    format: 'ex',
    dir: 'dist',
  },
};
export default config;
