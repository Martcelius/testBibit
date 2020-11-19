/* global _ */
'use strict'

const _ = require('lodash')

exports.responses = (res, obj, status) => {
  var resultPrint = {}

  resultPrint.status = status || 200

  if (_.isObject(obj)) {
    resultPrint.data = obj
  } else {
    resultPrint.message = obj
  }

  return res.status(resultPrint.status).json(resultPrint)
}
