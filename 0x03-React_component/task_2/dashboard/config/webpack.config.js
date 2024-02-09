// Import the 'path' module from Node.js
const path = require('path');

// Webpack configuration for development mode
module.exports = {
  // Set the mode to development
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

  // Module rules define how different types of files are treated
  module: {
    rules: [
      {
        // Process CSS files using style-loader and css-loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // Process image files (PNG, JPEG, GIF)
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            // Process images with image-webpack-loader
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            },
          },
        ],
      },
      {
        // Process JavaScript files (JS and JSX) using Babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          // Use babel-loader with specified presets
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  // Enable inline source maps for better debugging
  devtool: 'inline-source-map',

  // Development server configuration
  devServer: {
    // Serve static files from the 'dist' directory
    static: path.resolve('./dist'),
    // Enable gzip compression
    compress: true,
    // Set the port number to 8564
    port: 8564,
  },
};
