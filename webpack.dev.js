// Config file for the webpack development mode
const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
  // Setting mode to development instead of production
  mode: 'development',
  // Removing eval from the code and leaving it as it is in the js files
  devtool: 'none',
  // Bundled file parameters
  output: {
    // Filename
    filename: '[name].bundle.js',
    // Path to put the file in (Absoluth path)
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        // Checks for scss files
        test: /\.scss$/,
        use: [
          'style-loader', // Injects to the DOM
          'css-loader',  // Turns css to js
          'sass-loader' // Turns scss to css
        ],
      }
    ]
  }
});