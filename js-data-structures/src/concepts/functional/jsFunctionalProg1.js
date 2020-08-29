/**
 * @fileoverview JavaScript functional programming
 * 
 * apply function programming technique to implement buying item features
 */
const { toInfoLog } = require("../playground/utilities");

/**
 * Online Shopping
 */
const User = {
  name: "Walker",
  active: true,
  cart: [],
  purchases: [],
};

const userActionHistory = [];

// Implement a cart feature, including
// 1) add items to cart
// 2) add 8.5% tax to item in cart
// 3) buy item, cart ---> purchase
// 4) empty cart

/**
 * using compose to accomplish, apply functions from right to left
 * @param {*} fnF function 1
 * @param {*} fnG function 2
 */
const compose = (fnF, fnG) => (...args) => fnF(fnG(...args));

/** 
 * Or
 * using pipe to accomplish, apply functions from left to right
 * @param {*} fnF function 1
 * @param {*} fnG function 2
 */
const pipe = (fnF, fnG) => (...args) => fnG(fnF(...args));

/**
 * this function is factory function that accepts a list of function
 * use reduce((prev, current) => {}) with compose to apply these functions
 * @param  {...() => any} fns 
 */
function purchaseItem(...fns) {
  return fns.reduce(compose);
}

/**
 * add one item to User's cart, pure function
 * @param {User} user 
 * @param {{name: string, price: number}} item 
 */
function addItemToCart(user, item) {
  const updatedCart = user.cart.concat([item]);
  return Object.assign({}, user, { cart: updatedCart });
}

/**
 * apply tax to items in cart, pure function
 * @param {User} user 
 */
function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.085;
  const updatedCart = cart.map(item => (
    {
      ...item,
      price: item.price * taxRate,
    }));
  return Object.assign({}, user, { cart: updatedCart });
}

/**
 * buy item by moving items in cart to purchases, pure function
 * @param {User} user 
 */
function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}

/**
 * empty shopping cart, pure function
 * @param {User} user 
 */
function emptyCart(user) {
  return Object.assign({}, user, { cart: [] });
}

/**
 * store user history, not pure function because it is changing 
 * user action history array's state 
 * @param {user} user 
 */
function storeHistory(user) {
  userActionHistory.push(user);
  return user;
}

const result = purchaseItem(
  storeHistory,
  emptyCart,
  storeHistory,
  buyItem,
  storeHistory,
  applyTaxToItems,
  storeHistory,
  addItemToCart)(User, { name: "laptop", price: 200 });

console.log(toInfoLog(JSON.stringify(userActionHistory, null, 1)));
console.log(result);
