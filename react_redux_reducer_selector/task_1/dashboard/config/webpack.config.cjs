const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./', 'dist'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
      favicon: './src/assets/favicon.ico',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/dist', to: './static'}
      ]
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
