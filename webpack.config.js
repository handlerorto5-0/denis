const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "mainjs",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: "./src/index.html"
    })
  ]
}