'use strict'

let Route = express.Router()
let MovieController = require('../../controllers/movie')

Route
    .get('/search', MovieController.search)
    .get('/detail', MovieController.detail)


module.exports = Route
