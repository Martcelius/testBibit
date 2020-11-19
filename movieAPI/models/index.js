'use strict'

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('mysql://root:root@localhost:3306/movie_db')

const db = {
  Sequelize,
  sequelize,
  DataTypes
}

db.Log = require('./log')(db)

module.exports = db
