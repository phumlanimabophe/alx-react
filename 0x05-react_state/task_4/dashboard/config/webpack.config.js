const path = require("path");

// Webpack configuration object
module.exports = {
  // Set the mode to development for better debugging
  mode: "development",

  // Enable source maps for better debugging in the browser
  devtool: "inline-source-map",

  // Entry point of the application
  entry: "./src/index.js",

  // Output configuration for the bundled file
  output: {
    filename: "bundle.js",   // Output filename
    path: path.resolve("./dist"),  // Output directory
  },

  // Development server configuration
  devServer: {
    hot: true,   // Enable Hot Module Replacement (HMR)
    contentBase: path.resolve("./dist"),  // Serve files from the 'dist' directory
    compress: true,  // Enable gzip compression
    port: 8564,   // Specify the port for the development server
  },

  // Performance optimization settings
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },

  // Module configuration to handle different file types
  module: {
    rules: [
      // Babel loader for JavaScript and JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // Style loader for CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // File loader and image-webpack-loader for image files
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,  // webpack@1.x
              disable: true,   // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
};
