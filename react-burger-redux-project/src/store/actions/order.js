import * as actionTypes from './actionTypes';
import Order from '../../axiosOrder';
// import SignIn from '../../axiosFireBaseSignin';
// import { updateObject } from '../../shared/utility';

/**
 * Action creator
 * @param {*} id 
 * @param {*} orderData 
 */
const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

/**
 * Action creator - handle error
 * @param {*} error 
 */
const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

/**
 * Action creator
 */
const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

/**
 * Async action creator - post order data to server
 * Must recalculate total price at server side to make sure valid price
 * @param {*} orderData 
 * @param {*} token - auth token
 */
export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    if (!token) {
      dispatch(purchaseBurgerWithUser(orderData));
    } else {
      Order.post('/orders.json', orderData, { params: { auth: token } })
        .then(response => {
          // console.log(response); // id is stored in response.data.name
          dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        }).catch(error => {
          dispatch(purchaseBurgerFail(error));
        });
    }
  };
};

/**
 * Async action creator - post order data to server
 * Must recalculate total price at server side to make sure valid price
 * @param {*} orderData 
 */
export const purchaseBurgerWithUser = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    setTimeout(() => {
      dispatch(purchaseBurgerSuccess('guestNoNameOrderNoUserId', orderData));
    }, 2000);
  };
};

/**
 * Action creator - purchase init
 */
export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

/**
 * Action creator - fetch order success, called by async action creatored
 * @param {*} orders 
 */
const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

/**
 * Action creator - fetch order error, called by async action creatored
 * @param {*} error 
 */
const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

/**
 * Action creator - fetch orders start
 */
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

/**
 * Async action creator - fetch order data from server
 * Note, it is possible to do - return (dispatch, getState), getState should get the state info
 * @param {*} token - auth token
 */
export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    Order.get('/orders.json', {
      params: {
        auth: token, orderBy: '"userId"', equalTo: `"${userId}"`
      }
    }).then(response => {
      const fetchedOrders = [];
      for (let key in response.data) {
        fetchedOrders.push({
          ...response.data[key],
          id: key
        });
      }
      dispatch(fetchOrdersSuccess(fetchedOrders));
    }).catch(error => {
      dispatch(fetchOrdersFail(error));
    });
  };
};
