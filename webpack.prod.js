// Config file for the webpack production mode

const path = require('path');
const common = require('./webpack.common');
// Required for merging the two config files together
const merge = require('webpack-merge');
// Required for folder cleanup
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Required for css file extraction
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Required for css minification
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// Requred to add back js minification
const TerserPlugin = require('terser-webpack-plugin');
// Required for html minification
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
  // Setting mode to production
  mode: 'production',
  // Bundled file parameters
  output: {
    // Filename with contentHash we are using cashing when the file dosn't changing
    filename: '[name].[contentHash].bundle.js',
    // Path to put the file in (Absoluth path)
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  // Everytime we run build it is cleaning up the dist folder
  plugins: [new MiniCssExtractPlugin({filename: '[name].[contentHash].css'}), new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    template: './src/template.html',
    // options for minification
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true
    }
  })],
  module: {
    rules: [
      {
        // Checks for scss files
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});