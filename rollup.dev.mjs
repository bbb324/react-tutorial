import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';

export default [
  {
    input: 'src/app.js', // Entry point of your library
    output: [
      {
        file: 'public/bundle.js', // ES module build
        format: 'iife',
        sourcemap: true,
        name: 'app',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
    ],
    plugins: [

      resolve(), // So Rollup can find `node_modules` packages
      commonjs({
        include: 'node_modules/**',
        exclude: 'node_modules/@rollup/**'
      }), // So Rollup can convert `commonjs` modules to ES modules
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_modules/**', // Only transpile our source code
        babelHelpers: 'bundled', // Include babel helpers in the bundle
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        include: ['src/**/*'],
        presets: [
          ['@babel/preset-env', { targets: { browser: ['last 2 versions'] } }],
          '@babel/preset-react',
          '@babel/preset-typescript'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
        ]
      }),
      terser(),
      postcss({
        extract: true,
        minimize: true,
        modules: false
      }),
      serve({
        open: true,
        contentBase: 'public',
        port: 3000
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true
      })
    ],
    external: ['react', 'react-dom'], // Externalize dependencies that won't be included in the bundle
  },
];