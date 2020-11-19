'use strict'

const ApiLibs = require('../libs/API')
const ErrorLibs = require('../libs/Errors')
const ResponseLibs = require('../libs/Response')
const baseUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY_MOVIE}`
const movieService = require('../services/movie')

let movie = {}

module.exports = movie

movie.search = async (req, res, next) => {
  req.checkQuery('s', 'Query string s required').notEmpty()
  const error = req.validationErrors()
  if (error) {
    return ErrorLibs.errorCustomStatus(res, error)
  }

  const { s, page } = req.query

  const url = `${baseUrl}&s=${s}&page=${page}`

  try {
    const dataMovie = await ApiLibs.get(url)

    if (dataMovie.statusCode && dataMovie.statusCode !== 200) {
      return ErrorLibs.errorCustomStatus(res, JSON.parse(dataMovie.body), dataMovie.statusCode)
    }
    const endpoint = `${req.baseUrl}${req.path}`
    const dataLog = {
      endpoint_name: endpoint,
      search: s,
      page: page
    }

    // create log endpoint
    await movieService.createLog(dataLog)

    return ResponseLibs.responses(res, dataMovie)
  } catch (error) {
    return ErrorLibs.errorCustomStatus(res, error)
  }
}

movie.detail = async (req, res, next) => {
  req.checkQuery('movieId', 'Movie Id is required').notEmpty()
  const error = req.validationErrors()
  if (error) {
    return ErrorLibs.errorCustomStatus(res, error)
  }

  const { movieId } = req.query

  const url = `${baseUrl}&i=${movieId}`

  try {
    const dataMovie = await ApiLibs.get(url)

    if (dataMovie.statusCode && dataMovie.statusCode !== 200) {
      return ErrorLibs.errorCustomStatus(res, JSON.parse(dataMovie.body), dataMovie.statusCode)
    }

    const endpoint = `${req.baseUrl}${req.path}`
    const dataLog = {
      endpoint_name: endpoint,
      movie_id: movieId
    }

    // create log endpoint
    await movieService.createLog(dataLog)

    return ResponseLibs.responses(res, dataMovie)
  } catch (error) {
    return ErrorLibs.errorCustomStatus(res, error)
  }
}
