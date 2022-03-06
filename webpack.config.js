// @ts-nocheck
const path = require('path');
const BookmarkletPlugin = require('./webpack/BookmarkletPlugin');

const fileNames = ['free', 'strive', 'harvest', 'hsk4', 'hsk5', 'convert'];
const files = fileNames.reduce((prev, curr) => {
  prev[curr] = `./src/${curr}.js`;
  return prev;
}, {});

console.log(files);

module.exports = {
  mode: 'production',
  entry: files,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader',
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
  resolve: { extensions: ['.ts', '.js'] },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },
  // plugins: [new BookmarkletPlugin()],
};
