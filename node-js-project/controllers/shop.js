/**
 * @fileoverview Product controller
 */
const Product = require('../models/product');
const Cart = require('../models/cart');

//  const products = [];

// Moved to admin.js
// function getAddProduct(req, res, next) {
//   res.render('admin/add-product.ejs', {
//     pageTitle: "Add Product",
//     path: '/admin/add-product',
//     activeAddProduct: true,
//     productCss: true,
//     formsCss: true,
//   });
// }

// Moved to admin.js
// function postAddProduct(req, res, next) {
//   // products.push({
//   //   title: req.body.title
//   // }); 
//   const product = new Product(req.body.title);
//   product.save();
//   res.redirect('/');
// }

function getProducts(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop/product-list.ejs', {
      products: products,
      hasProducts: products.length > 0,
      pageTitle: 'All Products',
      path: '/products',
      activeShop: true,
      productCss: true,
    });
  });
}

function getProduct(req, res, next) {
  const productId = req.params.productId;
  Product.findById(productId, product => {
    if (product) {
      res.render('shop/product-detail.ejs', {
        product: product,
        pageTitle: 'Product Detail',
        path: '/products',
      });
    } else {
      res.redirect('/page-not-found');
    }
  });
}

function getIndex(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop/index.ejs', {
      products: products,
      hasProducts: products.length > 0,
      pageTitle: 'My Shop',
      path: '/',
      activeShop: true,
      productCss: true,
    });
  });
}

function getCart(req, res, next) {
  res.render('shop/cart.ejs', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
}

function postCart(req, res, next) {
  const productId = req.body.productId;
  Product.findById(productId, product => {
    if (product) {
      Cart.addProduct(productId, product.price);
    }
  });
  res.redirect('/cart');
}

function getOrders(req, res, next) {
  res.render('shop/orders.ejs', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
}

function getCheckout(req, res, next) {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Check out',
  });
}

// module.exports.getAddProduct = getAddProduct;
// module.exports.postAddProduct = postAddProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.getIndex = getIndex;
module.exports.getCart = getCart;
module.exports.postCart = postCart;
module.exports.getCheckout = getCheckout;
module.exports.getOrders = getOrders;
