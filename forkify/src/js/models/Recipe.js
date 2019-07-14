import axios from 'axios';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const COR = 'https://cors-anywhere.herokuapp.com/';
    const key = 'e775eef56a89b8292216581a75792889';
    try {
      const res = await axios.get(
        `${COR}http://food2fork.com/api/get`,
        {
          params: {
            key: key,
            rId: this.id
          }
        }
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
      throw error;
    }
  }

  calcTime() {
    // Assuming that we need 15 min for each 3 ingredients
    if (this.ingredients) {
      const numIng = this.ingredients.length;
      const periods = Math.ceil(numIng / 3);
      this.time = periods * 15;
    } else {
      this.time = 0;
    }
  }

  calcServings() {
    if (this.ingredients) {
      this.servings = 4;
    } else {
      this.servings = 0;
    }
  }

  parseIngredients() {
    const unitsLong = ['tablespoons', 'tablespoon',
      'ounces', 'ounce',
      'teaspoons', 'teaspoon',
      'cups', 'pounds',];
    const unitsShort = ['tbsp', 'tbsp',
      'oz', 'oz',
      'tsp', 'tsp',
      'cup', 'pound',];
    const units = [...unitsShort, 'kg', 'g', 'stick'];

    if (this.ingredients) {
      const newIngredients = this.ingredients.map(el => {
        // uniform units
        let ingredient = el.toLowerCase();
        unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, units[i]);
        });

        // remove parentheses
        ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

        // remove something like 1/2 to 
        ingredient = ingredient.replace(/\d\/\d\s+to\s+/i, '');

        // remove something like 2 to 
        ingredient = ingredient.replace(/\d\s+to\s+/i, '');

        // remove something like 1/2 stick 4 tbsp
        if (RegExp(/.stick.*tbsp./i).test(ingredient)) {
          ingredient = ingredient.replace(/\d\/\d\s+stick\s+/i, '');
        }

        // remove something like ______
        ingredient = ingredient.replace(/_+/g, '');

        // parse ingredients into count, unit, and ingredient
        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(arr => units.includes(arr));

        let objIngredient;
        if (unitIndex > -1) {
          // there is a unit
          // 4 1/z cups, arrCount is [4, 1/2] --. eval(4 + 1/2) = 4.5
          // 4 cups, arrCount is [4]
          const arrCount = arrIng.slice(0, unitIndex);
          console.log(ingredient, arrCount);
          let count;
          let ingredientWithDescriptioBeforeUnit = true;
          if (arrCount.length === 1) {
            count = eval(arrIng[0].replace('-', '+'));
            ingredientWithDescriptioBeforeUnit = false;
          } else {
            let num = arrIng
              .map(ing => RegExp(/\d+|\d+\/\d+/i).test(ing))
              .reduce((acc, cur) => acc && cur, true);
            if (num) {
              count = eval(arrIng.slice(0, unitIndex).join('+'));
              ingredientWithDescriptioBeforeUnit = false;
            } else {
              count = isNaN(arrIng[0]) ? null : parseInt(arrIng[0], 10);
            }
          }

          objIngredient = {
            count,
            unit: arrIng[unitIndex],
            ingredient: ingredientWithDescriptioBeforeUnit ?
              arrIng.slice(1).join(' ') : arrIng.slice(unitIndex + 1).join(' '),
          };
        } else if (!isNaN(parseInt(arrIng[0], 10))) {
          // there is no unit, but 1st element is a number
          objIngredient = {
            count: parseInt(arrIng[0], 10),
            unit: '',
            ingredient: arrIng.slice(1).join(' '),
          }
        } else if (unitIndex === -1) {
          // there is no unit and No number in 1st position
          if (ingredient) {
            objIngredient = {
              count: 1,
              unit: '',
              ingredient,
            };
          }
        }
        return objIngredient;
      }).filter(ing => ing);
      this.ingredients = newIngredients;
    }
  }

  updateServings(type) {
    // servings
    const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

    // ingredients
    this.ingredients.forEach(ing => {
      ing.count = ing.count * (newServings / this.servings)
    });
    this.servings = newServings;
  }
}