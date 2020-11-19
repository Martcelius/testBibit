'use strict'

const App = require('../server.js')
const ApiLibs = require('../app/libs/API')
const supertest = require('supertest')
const expect = require('chai').expect
const should = require('should')
const server = supertest(App.server)

describe ('Get Movie Search', () => {
  it('GET /v1/movie/search?s=Batman - should 200', (done) => {
    server
      .get('/v1/movie/search?s=Batman')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200)
        done()
      })
  })

  it('GET /v1/movie/search - should 400 need params s for search', (done) => {
    server
      .get('/v1/movie/search')
      .expect(400)
      .end((err, res) => {
        res.status.should.equal(400)
        res.body.errors.message.should.equal('Bad Request')
        done()
      })
  })
})

describe ('Get Movie Detail', () => {
  let movieIdExample = 'tt0372784'
  it('GET /v1/movie/detail?movieId= - should 200', (done) => {
    server
      .get(`/v1/movie/detail?movieId=${movieIdExample}`)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200)
        done()
      })
  })

  it('GET /v1/movie/detail - should 400 need moviewId', (done) => {
    server
      .get('/v1/movie/detail')
      .expect(400)
      .end((err, res) => {
        res.status.should.equal(400)
        res.body.errors.message.should.equal('Bad Request')
        done()
      })
  })
})

describe ('Test API Libs', () => {
  it('should return body search', async () => {
   let url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY_MOVIE}&s=Batman`

   const result = await ApiLibs.get(url)

   expect(result.Response).to.equal('True')
   expect(result).to.have.property('Search')
  })

  it('should return error 401: No API key provided', async () => {
    let url = `http://www.omdbapi.com/?s=Batman`

    const result = await ApiLibs.get(url)

    expect(result.statusCode).to.equal(401)
    expect(JSON.parse(result.body)).to.have.property('Error')
   })
})
