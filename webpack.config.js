const path = require('path');

module.exports = {
  entry: {
    ReactApp: path.join(__dirname, '/build/ReactApp.js')
  },
  output: {
    path: path.join(__dirname, '/build/js'),
    publicPath: 'js/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/build/'),
    compress: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};