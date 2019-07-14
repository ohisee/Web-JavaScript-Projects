import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const INGREDIENT_PRICES = {
  salad: 1.2,
  tomato: 1.2,
  cheese: 0.95,
  meat: 2.85,
  bacon: 1.30,
  onion: 0.90
};

const initialState = {
  ingredients: null,
  totalPrice: 1,
  error: false,
  building: false
};

/**
 * Add ingredient
 * @param {*} state 
 * @param {*} action 
 */
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

/**
 * Remove ingredient
 * @param {*} state 
 * @param {*} action 
 */
const removeIngredient = (state, action) => {
  const oldIngredientCount = state.ingredients[action.ingredientName];
  const oldPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
  const updatedIngredient = {
    [action.ingredientName]: (oldIngredientCount <= 0) ? 0 : oldIngredientCount - 1
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: (oldPrice <= 0) ? 1 : oldPrice,
    building: true
  };
  return updateObject(state, updatedState);
};

/**
 * Set ingredients
 * @param {*} state 
 * @param {*} action 
 */
const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: { // display burger ingredients in the following order
      salad: action.ingredients.salad,
      tomato: action.ingredients.tomato,
      onion: action.ingredients.onion,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 1,
    error: false,
    building: false
  });
};

/**
 * Reducer of burger builder
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
