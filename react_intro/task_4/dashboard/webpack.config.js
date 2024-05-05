const path = require('path');


module.exports = {
  entry: './src/App.js',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  }
}