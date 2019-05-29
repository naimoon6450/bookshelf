const Sequelize = require('sequelize')
const db = require('./dbsetup.js')

// define book schema
const Books = db.define('books', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.STRING),
    allowNull: false,
  },
  pageCount: {
    type: Sequelize.INTEGER,
  },
  image: {
    type: Sequelize.STRING,
  }
})

module.exports = Books;
