const { Users, Books } = require('./db/index.js');
const db = require('./db/dbsetup')
const axios = require('axios');
// create a function to run after the db sync

const init = () => {
  // create the tables
  db.sync({force: true}).then(() => {
    const authors = ['Jared Diamond', 'Atul Gawande', 'Cixin Liu']
    const bookData = [];
    authors.forEach(auth => {
      bookData.push(axios.get(`https://www.googleapis.com/books/v1/volumes?q=${auth}+inauthor`))
    })
    axios.all(bookData)
    .then(resp => {
      let arrTitles = [];
      resp.forEach(promiseAuth => {
        promiseAuth.data.items.forEach(item => {
          arrTitles.push({
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors,
            pageCount: item.volumeInfo.pageCount,
            image: item.volumeInfo.imageLinks.thumbnail
          });
        })
      });

      // create the books
      let booksForDB = [];
      arrTitles.forEach(book => {
        booksForDB.push(Books.create(book));
      })

      Promise.all(booksForDB)
      .then(() => {
        console.log('successfull seed')
      })
      .catch(err => {
        console.error(err)
      });

    })
    .catch(err => {
      console.error(err);
    })
  })
  .catch(err => {
    console.error(err);
  })

}

init();

module.exports = init;
