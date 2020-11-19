'use strict'

// const _ = require('lodash')
const Log = require('../../models').Log

const movie = {}

movie.createLog = async (logData) => {
  const logCreated = await Log.create(logData)

  return logCreated
}

module.exports = movie
