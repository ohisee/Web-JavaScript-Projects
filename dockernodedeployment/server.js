/**
 * @fileoverview server js
 */
const path = require("path");
const express = require("express");

const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});

server.listen(80);
