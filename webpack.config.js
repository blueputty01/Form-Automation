const path = require("path");
const BookmarkletPlugin = require("./webpack/BookmarkletPlugin");

module.exports = {
  mode: "production",
  entry: {
    comment: "./src/comment.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
      },
    ],
  },
  resolve: { extensions: [".ts"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [new BookmarkletPlugin()],
};