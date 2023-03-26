const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  devtool: mode === 'development' ? 'source-map' : undefined,

  entry: {
    app: path.join(__dirname, 'src/index.tsx'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@business': path.resolve(__dirname, 'src', 'business'),
      '@ui': path.resolve(__dirname, 'src', 'ui'),
      '@di': path.resolve(__dirname, 'src', 'di'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],

  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    hot: true,
  },
};
