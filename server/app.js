const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true})
  .then(connection => {
    console.log('Server mongo db is running.');
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.text());
app.use('/api', require('./routes'));
app.listen('3005', () => console.log('Server is running'));