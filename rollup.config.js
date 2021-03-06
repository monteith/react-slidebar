import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const pluginBabel = babel({ babelHelpers: 'bundled' });
const pluginMinify = terser();
const pluginResolve = resolve();
const pluginReplaceEnvProduction = replace({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const COMMON_INPUT = {
  input: './src/index.js',
  external: ['react', 'react-dom', 'prop-types', 'react-spring'],
};

const COMMON_OUTPUT = {
  name: 'react-slidebar',
  exports: 'named',
  sourcemap: true,
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
  },
};

export default [
  {
    ...COMMON_INPUT,
    plugins: [pluginBabel, pluginResolve],
    output: {
      ...COMMON_OUTPUT,
      format: 'umd',
      file: './dist/react-slidebar.umd.js',
    },
  },
  {
    ...COMMON_INPUT,
    plugins: [
      pluginBabel,
      pluginResolve,
      pluginMinify,
      pluginReplaceEnvProduction,
    ],
    output: {
      ...COMMON_OUTPUT,
      format: 'umd',
      file: './dist/react-slidebar.umd.min.js',
    },
  },
  {
    ...COMMON_INPUT,
    plugins: [pluginBabel, pluginResolve],
    output: {
      ...COMMON_OUTPUT,
      format: 'esm',
      file: './dist/react-slidebar.esm.js',
    },
  },
];
