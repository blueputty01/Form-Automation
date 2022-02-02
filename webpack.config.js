// @ts-nocheck
const path = require('path');
const BookmarkletPlugin = require('./webpack/BookmarkletPlugin');

const fileNames = ['free', 'strive'];
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
  resolve: { extensions: ['.ts', '.js'] },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },
  // plugins: [new BookmarkletPlugin()],
};
