/* global env */
'use strict'

const path = require('path')
const expressValidator = require('express-validator')
const helmet = require('helmet')
const CORS = require('cors')
const bodyParser = require('body-parser')

module.exports = (app) => {
  //settings
  app.set('env', env)
  app.set('port', process.env.PORT || 3000)
  app.options('*', CORS())
  app.use(CORS())
  app.use(expressValidator())
  app.use(bodyParser.json());

  if (app.get('env') === 'development') {
    const morgan = require('morgan')

    app.use(morgan('dev'))
  }

  app.use(helmet());
  /** ROUTES Apps */
  require(process.cwd() + '/app/routes')(app)
}
