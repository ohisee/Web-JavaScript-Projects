/**
 * @fileoverview App js
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware from top to bottom

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  console.log('this always runs first');
  next();
});

app.use('/add-product', (req, res, next) => {
  const htmlForm = `
    <html>
      <body>
        <form action="/product" method="POST">
          <input type="text" name="title" />
          <button type="submit">Add Product</button>
        </form>
      </body>
    </html>`;
  res.send(htmlForm);
});

// Triggered for incoming POST request
app.post('/product', (req, res, next) => {
  // Need to register a parser middleware
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h3>Hello from express</h3>');
});

app.listen(3000);
