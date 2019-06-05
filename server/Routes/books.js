const bookRouter = require('express').Router();
const { Books } = require('../../db/index.js')

bookRouter.get('/', (req, res) => {
  // send books
  Books.findAll()
  .then(data => {
    res.send(data);
  })

})

bookRouter.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  Books.destroy({where: {id: bookId}})
  res.send(res.status)
  // Books.destroy({where: {id: bookId}})
})

module.exports = bookRouter;
