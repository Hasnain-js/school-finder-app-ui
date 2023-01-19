// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: 'swc-loader',
                }
            },
        ],
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html"),
        }),
    ],
    devServer: {
        //contentBase: path.join(__dirname, "dist"),
        port: 3000,
        liveReload: true,
    },
};