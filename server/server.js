const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const router = require('./routes/router');

const port = process.env.PORT || 8080;
const app = express();

const { DB_USER, DB_HOST, DB_PASS } = process.env;
const db = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`;

mongoose.connect(db).then(
  () => console.log('Connected to database'),
  error => console.log(error)
);

app.use(
  bodyParser.urlencoded({ extended: true, limit: '5mb' })
);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token'
  );

  next();
});

app.use(router);

app.listen(port, () => console.log(`Listen on port ${port}`));
