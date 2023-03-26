const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  entry: {
    demo: path.join(__dirname, 'src/demo.tsx'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: 'demo',
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
});
