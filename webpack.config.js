module.exports = {
  // entry and output are filled by serverless-plugin-webpack
  target: 'node',
  externals: {
    'aws-sdk': 'commonjs aws-sdk'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
