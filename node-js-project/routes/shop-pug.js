/**
 * @fileoverview Shop js, using html Pug template
 */
const express = require('express');
const adminData = require('./admin');

const router = express.Router();

// Get uses exact match
router.get('/', (req, res, next) => {
  res.render('shop.pug', {
    products: adminData.products,
    docTitle: 'My Shop',
    path: '/',
  });
});

module.exports = router;
