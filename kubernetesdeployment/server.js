/**
 * @fileoverview server js
 */
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`
     <h1>Hello from this NodeJS app!!!!!!!</h1>
     <p>Try sending a request to /error and see what happens</p>
     <p>This is a new paragraph for updating deployment</p>
   `);
});

server.get('/error', (req, res) => {
  process.exit(1);
});

server.listen(8080);
