import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

/////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1); //url params

    if (!id) return; //guarding clause (NOTE: use for returning no params)
    recipeView.renderSpinner(); //loading animation

    // 1. Loading recipes
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// Invoke controlRecipes function
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
