/**
 * @fileoverview Cart
 */
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const filePath = path.resolve(rootDir, 'data', 'cart.json');

class Cart {

  static addProduct(id, productPrice) {
    fs.readFile(filePath, (err, dataContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(dataContent);
      }
      const existingProductIndex = cart.products.findIndex(
        product => product.id === id);
      const existingProduct = cart.products[existingProductIndex];
      if (existingProduct) {
        let updatedProduct = { ...existingProduct };
        updatedProduct.quantity = updatedProduct.quantity + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        let newProduct = { id: id, quantity: 1 };
        cart.products.push(newProduct);
      }
      cart.totalPrice = cart.totalPrice + productPrice;
      fs.writeFile(filePath, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }
}

module.exports = Cart;