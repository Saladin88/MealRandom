// 'use strict'

const btn = document.querySelector('#button_next');
const btn2 = document.querySelector('#button_nextPlat');
// const video = document.querySelector('.video_recipe');
// const instructions = document.querySelector('.instructions_recipe');
// const ingredients = document.querySelectorAll('.ingredients_recipe');
// const imgFlag = document.querySelector('.img_container');
const mainContain = document.querySelector('.container');
const testS = document.querySelector('.test');
const bodyy = document.querySelector('body');


const getJSon = async (url, MsgError = 'Item not found') => {
    const res= await fetch (url);
    if (!res.ok) throw new Error (MsgError);
    const data = await res.json();
    return data;
};

const getDataRecipe = () => {
    getJSon('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(data =>{
        renderRecipe(data);
    })
};

btn.addEventListener('click', ()=> {
    getDataRecipe();
    btn.classList.add('hidden');
    btn2.classList.remove('hidden');
    mainContain.classList.remove('hidden');
    bodyy.classList.add('background_shadow');
    
});

btn2.addEventListener('click', ()=>{
    getDataRecipe();
    btn2.classList.toggle('changed');
});


 const renderRecipe = (data) =>{
    mainContain.innerHTML= "";
    const meals = data.meals[0];
    console.log(meals)
    if (meals) {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meals["strIngredient" + i];
          const measure = meals["strMeasure" + i];
          if (ingredient) {
              ingredientsList.push(`${ingredient} ${measure}`);
            }
        }
        const ingredients = ingredientsList;
        const imgRecipe = data.meals[0].strMealThumb.slice(45);
        const video = data.meals[0].strYoutube.slice(32);
                const html = ` 
                <div class="item">1
                <span id="nameCountry">${meals.strArea}</span>
                </div>
                <div class="item">
                <img src="https://www.themealdb.com/images/media/meals/${imgRecipe}" alt="${meals.strMeal}" class="img_restaurant"/>
                <span id="namePlat">${meals.strMeal}</span>
                </div>
                <div class="item"></div>
                <div class="item">
                <iframe src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class='img_restaurant'></iframe>
                </div>
            <div class="item center ">Ingredient
            <p class="list_items">${ingredients}</p></div>
            <div class="item"></div>
            <div class="item center">Intructions
            <p class="list_items">${meals.strInstructions}</p>
            </div>
            <div class="item"></div> `;
            mainContain.insertAdjacentHTML("beforeend", html);
}
 };

// const test = function (data) {
//     meals = data.meals[0];
//     console.log(meals)
//     if (meals) {
//         const ingredientsList = [];
//         for (let i = 1; i <= 20; i++) {
//           const ingredient = meals["strIngredient" + i];
//           const measure = meals["strMeasure" + i];
//           if (ingredient) {
//               ingredientsList.push(`${ingredient} ${measure}`);
//             }
//         }
//         console.log(ingredientsList.join(','));

// }
// };
// test()


// let table = [];
// const falsy = [NaN, null, undefined, '', false];
// const test = function (ingredients, mesurements) {
//    for (const [key, value] of Object.entries(ingredients.meals[0])) {
//        if (key.indexOf('strIngredient') === 0 && value !== falsy || key.indexOf('strMeasure') === 0 && value !== falsy ) {
//           console.log(key, value);
//        console.log([key, value].filter(function (item,i) {
//            return item[i].length >0
//        }));
//       }
//      }

// }; 
