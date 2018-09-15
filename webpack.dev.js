const path = require('path');
const merge = require('webpack-merge');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const common = require('./webpack.common.js');
const analyzer = require('webpack-bundle-analyzer');

const { BundleAnalyzerPlugin } = analyzer;

module.exports = merge(common, {
  entry: "./src/index.jsx",
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'eval',
  plugins: [
    new ErrorOverlayPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
});
