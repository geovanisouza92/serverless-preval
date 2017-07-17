/* globals preval */

'use strict'

const message = preval`
  const fs = require('fs')
  const path = require('path')

  module.exports = fs.readFileSync(path.resolve(__dirname, 'message.txt'), 'utf8')
`

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event
    })
  }

  callback(null, response)
}
