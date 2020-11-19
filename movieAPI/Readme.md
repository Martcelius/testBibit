# Movie API

step for running simple movie API
-----------------------------------
1. copy .env-sampel to .env
2. insert value for API_KEY_MOVIE with faf7e5bb
3. npm install
4. make mysql db = movie_db
5. setup database connection in config/config.json with your database privilage
6. run migration database : npx sequalize db:migrate

running apps
------------------------------------
1. npm start

unit test
-------------------------------------
1. npm test

sample API in local 
-----------------------------------
* for search `http://localhost:3000/v1/movie/search?s=Batman`
* for detail `http://localhost:3000/v1/movie/detail?movieId=tt0372784`

sample API in public url
----------------------------------
* for search `https://movie-api-bibit.herokuapp.com/v1/movie/search?s=Batman`
* for detail `https://movie-api-bibit.herokuapp.com/v1/movie/detail?movieId=tt0372784`
