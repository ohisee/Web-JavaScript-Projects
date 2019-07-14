import { DomElements } from './base';

export const getInput = () => DomElements.searchInput.value;

export const clearInput = () => {
  DomElements.searchInput.value = '';
};

export const clearResults = () => {
  DomElements.searchResultList.innerHTML = '';
  DomElements.searchResultPages.innerHTML = '';
};

export const highlightSelected = (id) => {
  // css selector
  // const resultsArr = Array.from(document.querySelectorAll('.results__link'));
  // resultsArr.forEach(el => el.classList.remove('results__link--active'));
  const ac = document.querySelector('.results__link--active');
  if (ac) {
    ac.classList.remove('results__link--active');
  }
  // document.querySelector(`a[href="#${id}"]`).classList.add('results__link--active');
  document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active');
};

/**
 * Reduce title length, for example,
 * 'Pasta with tomato and spinach'
 * acc: 0 -> acc + cur.length = 5, newTitle = ['Pasta]
 * acc: 5 -> acc + cur.length = 5 + 4 = 9, newTitle = ['Pasta', 'with']
 * acc: 9 -> acc + cur.length = 9 + 6 = 16, newTitle = ['Pasta', 'with', 'tomato']
 * 
 * @param {*} title 
 * @param {*} limit 
 */
const limitRecipeTitle = (title, limit = 17) => {
  if (title.length > limit) {
    const newTitle = [];
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};

const renderRecipe = (recipe) => {
  const markup = `
  <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
  </li>
  `;
  // 'beforeend' put new li element AFTER any existing li element
  DomElements.searchResultList.insertAdjacentHTML('beforeend', markup);
}

const defaultRecipe = () => {
  const markup = `
  <li>
    <a class="results__link results__link--active" href="#23456">
      <figure class="results__fig">
        <img src="img/test-1.jpg" alt="Test">
      </figure>
      <div class="results__data">
        <h4 class="results__name">Pasta with Tomato ...</h4>
        <p class="results__author">The Pioneer Woman</p>
      </div>
    </a>
  </li>
  `;
  DomElements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

/**
 * Use HTML data-* data attribute to store go to page number
 * 
 * @param {*} page 
 * @param {*} type 'prev' or 'next'
 */
const createButton = (page, type) => {
  return `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
      <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
      </svg>
    </button>
  `;
};

const renderButtons = (page, numResults, resultPerPage) => {
  const pages = Math.ceil(numResults / resultPerPage);
  let button;
  if (page === 1 && pages > 1) {
    // button to go to next page
    button = createButton(page, 'next');
  } else if (page < pages) {
    // both buttons
    button = `${createButton(page, 'prev')} ${createButton(page, 'next')}`;
  } else if (page === pages && pages > 1) {
    // only button to go to previous page
    button = createButton(page, 'prev');
  }
  if (button) {
    DomElements.searchResultPages.insertAdjacentHTML('afterbegin', button);
  }
};

/**
 * Array of recipes
 * @param {*} recipes array of recipes
 */
export const renderResults = (recipes, page = 1, resultPerPage = 10) => {
  if (recipes) {
    const begin = (page - 1) * resultPerPage;
    const end = page * resultPerPage;
    recipes.slice(begin, end).forEach(element => {
      renderRecipe(element);
    });
    renderButtons(page, recipes.length, resultPerPage);
  } else {
    defaultRecipe();
  }
};