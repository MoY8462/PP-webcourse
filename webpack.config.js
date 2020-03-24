const path = require('path');
const webpack = require('webpack');
const htlmWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:  './src/cliente/js/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new htlmWebpackPlugin ({
            filename: 'index.html',
            template: './src/cliente/index.html'
        }),
        new htlmWebpackPlugin ({
            filename: 'contacto.html',
            template: './src/cliente/contacto.html'
        }),
        new htlmWebpackPlugin ({
            filename: 'blog.html',
            template: './src/cliente/blog.html'
        }),
        new htlmWebpackPlugin ({
            filename: 'post.html',
            template: './src/cliente/post.html'
        })
    ]
};