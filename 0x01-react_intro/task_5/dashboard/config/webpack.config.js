const path = require('path');

// Webpack configuration
module.exports = {
  // Development mode
  mode: 'development',
  
  // Entry point for bundling
  entry: './src/index.js',
  
  // Output settings
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  
  // Module rules for different file types
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
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
  
  // Source map for debugging
  devtool: 'inline-source-map',
  
  // Development server configuration
  devServer: {
    static: path.resolve('./dist'),
    compress: true,
    port: 8564,
  },
};
