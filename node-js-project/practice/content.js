/**
 * @fileoverview Content js
 */
const path = require('path');
const express = require('express');

const app = express();

const router = express.Router();

const indexRoute = router.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

const addUserRoute = router.get('/users', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'views', 'users.html'));
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(indexRoute);

app.use(addUserRoute);

app.listen(3000);
