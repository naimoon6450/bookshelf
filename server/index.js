const express = require('express');
const app = express();
const axios = require('axios');

const morgan = require('morgan');
// app logging middleware
app.use(morgan('dev'));
// parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {

})

const PORT = 3000;
app.listen(PORT, () => {
  'Server started ...';
})
