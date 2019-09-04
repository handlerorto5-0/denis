const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "mainjs",
    path: path.resolve(__dirname, 'dist')
  }
}