const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    module:{
        rules:[{test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/}]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },

    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})],
}