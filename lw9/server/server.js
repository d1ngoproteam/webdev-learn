const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/routes'));

app.listen(process.env.port || 8080, function() {
  console.log('Server running!');
});