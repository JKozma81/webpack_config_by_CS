module.exports = {
  // Removing eval from the code and leaving it as it is in the js files
  devtool: 'none',
  // Entry js file for look at
  entry: {
    // Entry point for the main js files
    main: './src/index.js',
    // Entry point for the vendor provided js
    vendor: './src/vendor.js'
  },
  // Rules for working with diferent type of files
  module: {
    rules: [
      {
        // For html files it is using html-loader and require the image in js
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        // For the image files use file-loader to move them over to dist folder with the provided options
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            // File names with hash
            name: '[name].[hash].[ext]',
            // Output folder name
            outputPath: 'imgs'
          }
        }
      },
    ],
  },
}