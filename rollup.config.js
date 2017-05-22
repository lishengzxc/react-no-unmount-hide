import cjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: './src/ReactNoUnmountHide.js',
  format: 'umd',
  moduleName: 'ReactNoUnmountHide',
  dest: './dist/ReactNoUnmountHide.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**'
      ]
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    resolve({ browser: true, main: true }),
    uglify()
  ],
  sourceMap: true,
  external: ['react', 'react-dom'],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};