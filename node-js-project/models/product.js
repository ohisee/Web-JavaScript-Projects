/**
 * @fileoverview Product
 */
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');
const id = require('../utils/id');

// const products = [];

function getProductsFromFile(callback) {
  const filePath = path.resolve(rootDir, 'data', 'product.json');
  fs.readFile(filePath, (err, dataContent) => {
    if (err) {
      callback([], fpath = filePath);
    } else {
      callback(JSON.parse(dataContent), fpath = filePath);
    }
  });
}

class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = id();
    // products.push(this);
    getProductsFromFile((products, filePath) => {
      // this refers to Product class
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }

  static findById(id, callback) {
    getProductsFromFile((products)  => {
      const product = products.find(prod => prod.id === id);
      callback(product);
    });
  }
}

module.exports = Product;