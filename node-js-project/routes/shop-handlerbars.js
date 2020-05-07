/**
 * @fileoverview Shop js, using html Handlerbars template
 */
const express = require('express');
const adminData = require('./admin');

const router = express.Router();

// Get uses exact match
router.get('/', (req, res, next) => {
  // Inject into {{{ body }}}
  res.render('shop.hbs', {
    products: adminData.products,
    hasProducts: adminData.products.length > 0,
    pageTitle: 'My Shop',
    path: '/',
    activeShop: true,
    productCss: true,
  });
});

module.exports = router;
