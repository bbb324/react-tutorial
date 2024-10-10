import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: 'src/Toast.tsx',
    output: [
        {
            file: 'dist/toast.js',
            format: 'cjs',
        },
        {
            file: 'dist/toast.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        typescript(),
        commonjs(),
        resolve(),
        sourcemaps(),
    ],
    external: ['react', 'react-dom'],
};