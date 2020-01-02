/**
 * @fileoverview Shop js
 */
const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

// Get uses exact match
router.get('/', (req, res, next) => {
  // __dirname -> folder of this file
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
