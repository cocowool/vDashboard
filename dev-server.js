const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevServer = require('webpack-dev-server');

const app = express();
const config = require('./webpack.config.js');
const options = {
    constBase  : './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, function(){
    console.log('Dev server listening on port 3000!\n');
})