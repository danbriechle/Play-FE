const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "./test/index-test.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss']
  },
  node: {
   fs: "empty"
}
};
