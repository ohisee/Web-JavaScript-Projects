/**
 * @fileoverview Express app
 */
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('Always runs this middleware');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('First middleware');
  res.send('<h3>Users Page</h3>');
});

app.use('/', (req, res, next) => {
  console.log('Second middlware');
  res.send('<h3>Express App</h3>');
});

app.listen(3000);
