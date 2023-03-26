const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';

module.exports = {
  mode,
  devtool: isDev ? 'source-map' : undefined,

  entry: {
    index: path.join(__dirname, 'src/index.ts'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
      },
    ],
  },
};
