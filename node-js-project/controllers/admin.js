/**
 * @fileoverview Product controller
 */
const Product = require('../models/product');

function getAddProduct(req, res, next) {
  res.render('admin/add-product.ejs', {
    pageTitle: "Add Product",
    path: '/admin/add-product',
    activeAddProduct: true,
    productCss: true,
    formsCss: true,
  });
}

function postAddProduct(req, res, next) {
  // products.push({
  //   title: req.body.title
  // }); 
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // Need to store price as number
  const product = new Product(title, imageUrl, +price, description);
  product.save();
  res.redirect('/');
}

function getProducts(req, res, next) {
  Product.fetchAll((products) => {
    res.render('admin/products.ejs', {
      products: products,
      hasProducts: products.length > 0,
      pageTitle: 'Admin Products',
      path: '/admin/products',
      activeShop: true,
      productCss: true,
    });
  });
}

module.exports.getAddProduct = getAddProduct;
module.exports.postAddProduct = postAddProduct;
module.exports.getProducts = getProducts;
