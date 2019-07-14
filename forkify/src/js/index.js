import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likeView';
import { DomElements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - shopping list obejct
 * - liked recipes
 */
const state = {};

/**
 * Search Controller
 */
const controlSearch = async () => {
  // 1 get search query from view
  const query = searchView.getInput();

  if (query) {
    // 2 new search object and add to state
    state.search = new Search(query);

    // 3 Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(DomElements.searchResult);

    try {
      // 4 search for recipes
      await state.search.getResults();

      // 5 render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      clearLoader();
      // console.log(error);
    }
  }
};

DomElements.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  controlSearch();
});

/**
 * Use event delegation since button will not be available when page 
 * is first loaded. Attach an event to the parent element
 */
DomElements.searchResultPages.addEventListener('click', event => {
  const button = event.target.closest('.btn-inline');
  if (button) {
    const goToPage = parseInt(button.dataset.goto, 10);
    if (!isNaN(goToPage)) {
      searchView.clearResults();
      searchView.renderResults(state.search.result, goToPage);
    }
  }
});

/**
 * Recipe Controller
 */
const controlRecipe = async () => {
  const hashid = window.location.hash.replace('#', '');
  if (hashid) {
    // prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(DomElements.recipe);

    // highlight selected search item
    if (state.search) {
      searchView.highlightSelected(hashid);
    }

    // create new recipe object
    state.recipe = new Recipe(hashid);

    try {
      // get recipe data and parse ingredients
      await state.recipe.getRecipe();
      // console.log(state.recipe.ingredients);
      state.recipe.parseIngredients();

      // calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // render recipe
      // console.log(state.recipe);
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        (state.likes) ? state.likes.isLiked(hashid) : false
      );
    } catch (error) {
      // console.log(error);
    }
  }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * LIST controller
 */
const controlList = () => {
  // create a new list if there is none yet
  if (!state.list) {
    state.list = new List();
  }

  // add each ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// handle delete and update list item events
DomElements.shoppingList.addEventListener('click', event => {
  const id = event.target.closest('.shopping__item').dataset.itemid;

  // handle the delete button
  if (event.target.matches('.shopping__delete, .shopping__delete *')) {
    // delete from state
    state.list.deleteItem(id);

    // delete from UI
    listView.deleteItem(id);

    // handle the count update
  } else if (event.target.matches('.shopping__count-value')) {
    const val = parseFloat(event.target.value);
    if (!isNaN(val)) {
      state.list.updateCount(id, val);
    }
  }
});

/**
 * LIKE controller
 */
const controlLike = () => {
  if (!state.likes) {
    state.likes = new Likes();
  }

  const currentId = state.recipe.id;

  // user has not yet liked current recipe
  if (!state.likes.isLiked(currentId)) {
    // add like to the state
    const newLike = state.likes.addLike(
      currentId,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );

    // toggle the like button
    likeView.toggleLikeButton(true);

    // add like to UI list
    likeView.renderLike(newLike);
  } else {  // user has liked current recipe
    // remove like from the state
    state.likes.deleteLike(currentId);

    // toggle the like button
    likeView.toggleLikeButton(false);

    // remove like frmo UI list
    likeView.deleteLike(currentId);
  }

  likeView.toggleLikeMenu(state.likes.getNumLikes());
  
};

// Restore liked recipes on page load
window.addEventListener('load', () => {
  state.likes = new Likes();
  state.likes.readStorage();
  likeView.toggleLikeMenu(state.likes.getNumLikes());
  // render the existing likes
  state.likes.likes.forEach(like => likeView.renderLike(like));
});


// handling recipe button clicks
// recipe element is the parent element, so click on recipe element and match its child elements
DomElements.recipe.addEventListener('click', event => {
  if (event.target.matches('.btn-decrease, .btn-decrease *')) {
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (event.target.matches('.btn-increase, .btn-increase *')) {
    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if (event.target.matches('.recipe__btn--add, recipe__btn--add *')) {
    // .recipe__btn--add, recipe__btn--add * ---> select class name and all its child elements
    // add ingredients to shopping list
    controlList();
  } else if (event.target.matches('.recipe__love, .recipe__love *')) {
    // like controller
    controlLike();
  }
});