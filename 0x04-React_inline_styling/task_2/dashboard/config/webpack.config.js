// Import the 'path' module for handling file paths
const path = require('path');

// Export the webpack configuration object
module.exports = {
    // Set the build mode to 'development' for easier debugging
    mode: 'development',

    // Specify the entry point for the application
    entry: './src/index.js',

    // Output configuration for bundled files
    output: {
        filename: 'bundle.js',
        // Resolve the path for the output directory
        path: path.resolve('./dist')
    },

    // Module rules for handling different file types
    module: {
        rules: [
            // Handle CSS files using style-loader and css-loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // Handle image files using file-loader and image-webpack-loader
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
            // Use Babel for transpiling JavaScript and JSX files
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

    // Source map configuration for better debugging
    devtool: 'inline-source-map',

    // Development server configuration
    devServer: {
        // Set the static content directory
        static: path.resolve('./dist'),
        // Enable compression for faster serving
        compress: true,
        // Specify the port for the development server
        port: 8564,
    },
};
