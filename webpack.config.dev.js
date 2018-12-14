const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    mode: 'development',

    entry: {
        app: ['./src/index.jsx'],
    },

    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    },
                ],
            },
            {
                // make all files ending in .json5 use the `json5-loader`
                test: /\.json5$/,
                loader: 'json5-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {

                test: /\.(png|jpg|gif|svg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.jsx/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react", "es2015", "stage-1"],
                        plugins: ["styled-components"]
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HTMLwebpackPlugin({
            //template: './src/html/index.html',
            template: './src/index.html',
            //meta: require('./meta.json'),
            favicon: '',
        }),
        new ManifestPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};