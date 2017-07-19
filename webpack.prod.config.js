const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.dev.config')

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new UglifyJSPlugin({ comments: false })
])

module.exports = config
