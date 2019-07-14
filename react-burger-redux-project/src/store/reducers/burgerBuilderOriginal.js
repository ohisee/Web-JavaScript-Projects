import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
  salad: 1.2,
  tomato: 1.2,
  cheese: 0.95,
  meat: 2.85,
  bacon: 1.30,
  onion: 0.90
};

const ingredientsDisplayOrder = {  // eslint-disable-line no-unused-vars
  salad: 1,
  tomato: 2,
  onion: 3,
  bacon: 4,
  cheese: 5,
  meat: 6
};

const initialState = {
  ingredients: null,
  totalPrice: 1,
  error: false
};

/**
 * Reducer
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENT:
      const oldIngredientCount = state.ingredients[action.ingredientName];
      const oldPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: (oldIngredientCount <= 0) ? 0 : oldIngredientCount - 1
        },
        totalPrice: (oldPrice <= 0) ? 1 : oldPrice
      }
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: { // display burger ingredients in the following order
          salad: action.ingredients.salad,
          tomato: action.ingredients.tomato,
          onion: action.ingredients.onion,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: 1,
        error: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      break;
  }
  return state;
};

export default reducer;
