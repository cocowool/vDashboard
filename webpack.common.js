const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
        // menu: './src/menu.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // title: 'Progressive web application',
            template: './src/index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.ProvidePlugin({
        //     _: 'loadsh'
        // }),
        // new WorkboxPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true
        // }),
        // new ExtractTextPlugin("../css/[name].css", {
        //     allChunks: true
        // })
    ],
    output: {
        filename: '[name].[hash].js',
        // chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            // chunks: 'all'
            cacheGroups: {
                vendor: {
                    test: /[\\]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
            { test: /\.(csv|tsv)$/, use: ['csv-loader']},
            { test: /\.xml$/, use: ['xml-loader'] }
        ]
    }
};