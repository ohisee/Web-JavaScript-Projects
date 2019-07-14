import * as actionTypes from './actionTypes';
import Order from '../../axiosOrder';
import SignIn from '../../axiosFireBaseSignin';

/**
 * Action creator
 * @param {*} name - ingredient name 
 */
export const addIngredients = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  }
};

/**
 * Action creator
 * @param {*} name - ingredient name 
 */
export const removeIngredients = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  }
};

/**
 * Sync action creator to be used by async action creator using Redux thunk
 * @param {*} ingredients 
 */
const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

const fetchedIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

/**
 * Async actionc creator, fetch ingredients from server
 */
export const initIngredients = () => {
  return (dispatch) => {
    SignIn.post('/verifyPassword', {
      email: 'wontonrich@firebase.com',
      password: 'reader!@123456',
      returnSecureToken: true
    }).then(response => {
      return Promise.resolve(response.data.idToken);
    }).then(token => {
      return Order.get('/ingredients.json', { params: { auth: token } });
    }).then(response => {
      dispatch(setIngredients(response.data));
    }).catch(error => {
      dispatch(fetchedIngredientsFailed());
    });
  };
};
