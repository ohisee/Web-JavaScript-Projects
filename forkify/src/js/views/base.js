/**
 * DOM elements
 */
export const DomElements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchResultList: document.querySelector('.results__list'),
  searchResult: document.querySelector('.results'),
  searchResultPages: document.querySelector('.results__pages'),
  recipe: document.querySelector('.recipe'),
  shoppingList: document.querySelector('.shopping__list'),
  likesMenu: document.querySelector('.likes__field'),
  likesList: document.querySelector('.likes__list'),
};

export const DomElementStrings = {
  loaderClass: 'loader',
  loader: function () {
    return `.${this.loaderClass}`;
  }
};

/**
 * Render spin loader
 * @param {*} parentElement 
 */
export const renderLoader = (parentElement) => {
  const loader = `
    <div class="${DomElementStrings.loaderClass}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parentElement.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${DomElementStrings.loaderClass}`);
  if (loader) {
    loader.parentElement.removeChild(loader);
  }
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
export const limitRecipeTitle = (title, limit = 17) => {
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