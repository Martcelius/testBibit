'use strict'

module.exports = (db) => {
  const Log = db.sequelize.define('log', {
    // create schema for order model
    id: {
      type: db.DataTypes.UUID,
      defaultValue: db.Sequelize.UUIDV4,
      primaryKey: true
    },
    endpoint_name: {
      type: db.DataTypes.STRING
    },
    search: {
      type: db.DataTypes.STRING
    },
    page: {
      type: db.DataTypes.INTEGER
    },
    movie_id: {
      type: db.DataTypes.STRING
    }
  })

  return Log
}

