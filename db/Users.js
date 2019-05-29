const Sequelize = require('sequelize')
const db = require('./dbsetup.js')

console.log(db);
// define user schema
const Users = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Users;
