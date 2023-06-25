import React from 'react';
import './Recipies.css'
import { useLoaderData } from 'react-router-dom';
import Recipe from '../recipe/Recipe';


const Recipes = () => {
  const chef = useLoaderData();
  const {id, name,image, ingredients,likes,experience, recipes, description, cookingMethod, img, ratting}= chef;
  console.log(chef);

  return (
    <div className='container my-3'>
      <h3 className='text-center text-success'>View Recipes</h3>
      <div className='d-md-flex align-items-center gap-3'>
        <div>
        <img className='image' src={image} alt="" />
        </div>
        <div className="text ms-3 p-4">
        <h3>{name}</h3>
        <p>Bio:{description} </p>
        <p>Likes:{likes} </p>
        <p>Number Of Recipe {recipes.length} </p>
        <p>Experience:{experience} </p>
        </div>

      </div>
     
      <section className='food-recipe'>
  {
    recipes.map(recipe=> <Recipe key={recipe.id}
    recipe={recipe}></Recipe>)
  }
      </section>
    </div>
  );
};

export default Recipes;
