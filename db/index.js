const Users = require('./Users.js');
const Books = require('./Books.js');

// associations
Users.hasMany(Books);
Books.belongsTo(Users);

module.exports = {
  Users,
  Books
};
