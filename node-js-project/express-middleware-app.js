/**
 * @fileoverview Express middleware app js
 */
const express = require('express');

// express exports as a function
const app = express();

// express middleware
app.use((req, res, next) => {
  console.log('In the middleware');
  // travel to next middleware, allowing the request
  // to continue to travel to next middleware, from top to bottom
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h3>hello from express</h3>');
});

app.listen(3000);
