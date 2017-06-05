'use strict'

require('dotenv').load()

const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

let plugins = [
  new ExtractTextPlugin({ filename: 'bundle.css' }),
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
    __DEBUG__: JSON.stringify(!production)
  })
]

if(production) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: { warnings: false }
    }),
    new CleanPlugin()
  ])
}

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  devtool: production ? false : 'source-map',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(woff|ttf|svg|eot).*/,
        use: 'url-loader?limit=10000&name=image/[hash].[ext]'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths: [`${__dirname}/app/scss/`]
                }
              }
            ]
          }
        )
      }
    ]
  }
}
