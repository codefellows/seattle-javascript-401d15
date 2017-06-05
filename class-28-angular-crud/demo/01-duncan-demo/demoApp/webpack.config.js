'use strict';

require('dotenv').config();
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  new ExtractPlugin('bundle-[hash].css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
];

if(production){
  plugins = plugins.concat([
    new CleanPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}

module.exports = {
  plugins,
  devtool: 'eval',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle-[hash].js',
    path:`${__dirname}/build`,
    publicPath: process.env.CDN_URL,
  },
  devServer: {
    // for spas
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=60000&name=font/[name].[ext]',
      },
      {
        test: /\.(jpg|jpeg|tiff|png|gif)$/,
        loader: 'url-loader?limit=60000&name=image/[name].[ext]',
      },
    ],
  },
}











