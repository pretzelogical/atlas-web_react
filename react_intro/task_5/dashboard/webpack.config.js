const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin()
  ]
};
