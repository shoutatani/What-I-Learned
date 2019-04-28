const path = require('path');

module.exports = {
  entry: './import.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};