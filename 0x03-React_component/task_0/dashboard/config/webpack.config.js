// Import the 'path' module
const path = require('path');

// Webpack configuration
module.exports = {
  // Development mode
  mode: 'development',

  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    // Output file name
    filename: 'bundle.js',
    // Output directory
    path: path.resolve('./dist')
  },

  // Module rules
  module: {
    // CSS files processing
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // Image files processing (PNG, JPEG, GIF)
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          { loader: 'image-webpack-loader', options: { bypassOnDebug: true, disable: true } },
        ],
      },
      // JavaScript files processing (JS and JSX) using Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } }
      }
    ]
  },

  // Source maps for debugging
  devtool: 'inline-source-map',

  // Development server settings
  devServer: {
    // Serve static files from 'dist'
    static: path.resolve('./dist'),
    // Enable gzip compression
    compress: true,
    // Set the port to 8564
    port: 8564,
  },
};
