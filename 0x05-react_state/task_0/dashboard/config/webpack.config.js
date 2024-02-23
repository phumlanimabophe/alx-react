const path = require("path");

/*
  Webpack Configuration:

  - Sets the mode to development for better debugging.
  - Uses inline-source-map for source mapping in the development environment.
  - Defines the entry point of the application.
  - Configures the output for the bundled file.
  - Sets up a development server with Hot Module Replacement (HMR).
  - Configures modules to handle different file types.

*/

// Webpack configuration object
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },
  devServer: {
    hot: true,
    contentBase: path.resolve("./dist"),
    compress: true,
    port: 8564,
  },
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
