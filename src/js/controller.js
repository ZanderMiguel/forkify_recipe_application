// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async () => {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    console.log(res);
  } catch (err) {
    alert(err);
  }
};

fetch(
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
);
console.log('asd');
showRecipe();
