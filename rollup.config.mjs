import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-css';
import babel from '@rollup/plugin-babel'

export default [
    {
      input: 'src/index.ts', // Entry point of your library
      output: [
       
        {
          file: 'lib/esm/index.esm.js', // ES module build
          format: 'esm',
          sourcemap: true,
        },
      ],
      plugins: [
        peerDepsExternal(),
        resolve(), // So Rollup can find `node_modules` packages
        commonjs(), // So Rollup can convert `commonjs` modules to ES modules
        typescript({tsconfig: './tsconfig.json'}),
        babel({
          exclude: 'node_modules/**', // Only transpile our source code
          babelHelpers: 'bundled', // Include babel helpers in the bundle
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        postcss({
            extract: true,
            minimize: true,
            modlues: false
        }),
       
       
      ],
      external: ['react', 'react-dom'], // Externalize dependencies that won't be included in the bundle
    },
  ];