'use strict'

const path = require('path')
global.express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

require('dotenv').config()

global.env = process.env.NODE_ENV

require(path.join(__dirname, '/app/config/express'))(app)

server.listen(app.get('port'), () => {
  console.log(`\n✔ Api server http://api.local:${app.get('port')} in ${env} mode`)
})

module.exports.server = http.createServer(app)
