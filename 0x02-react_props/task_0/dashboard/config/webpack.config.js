// Import the 'path' module to handle file paths
const path = require('path');

// Webpack configuration object for development environment
module.exports = {
  // Set the development mode for better debugging options
  mode: 'development',

  // Specify the entry point of the application
  entry: './src/index.js',

  // Define the output configuration
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve('./dist') // Output directory path
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.css$/, // Apply style-loader and css-loader for CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Use file-loader and image-webpack-loader for image files
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // Bypass image processing during debugging
              disable: true // Disable image optimization
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // Use babel-loader for JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

  // Generate inline source maps for enhanced debugging experience
  devtool: 'inline-source-map',

  // Development server configuration
  devServer: {
    static: path.resolve('./dist'), // Specify the static files directory
    compress: true, // Enable gzip compression for faster serving
    port: 8564, // Set the port for the development server
  },
};
