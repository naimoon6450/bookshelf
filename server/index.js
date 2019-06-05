const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const bookRouter = require('./Routes/books.js')

const morgan = require('morgan');
// app logging middleware
app.use(morgan('dev'));
// parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')))
app.use('/books', bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  'Server started ...';
})
