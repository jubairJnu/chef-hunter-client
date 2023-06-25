import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './recipe.css'
import Rating from 'react-rating';
import { FaHeart, FaStar,FaRegStar } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';



const Recipe = ({recipe}) => {
  const {id, name,image, ingredients,likes,experience, recipes, description, cookingMethod, img, ratting}= recipe;
 const [favorite, setFavaroite]= useState(false);
 const handleFavaroute=()=>{
  toast('Successfully added in favorite.');
  setFavaroite(true)
 }
  return (
    <div>
      <Card>
      
            <Card.Body>
        <Card.Title className='text-center'>{recipe?.name}</Card.Title>
        <Card.Text>
         <span className='fw-bold'>Ingredients:</span> {ingredients}
        </Card.Text>
        <p><span className='fw-bold'>Cooking Method:</span> {cookingMethod}</p>
        <div className='d-flex justify-content-between'>
      <div>
      <Rating className='text-warning'
  placeholderRating={ratting}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar/>}
  fullSymbol={<FaStar />}
  readonly
/> <span>{ratting}</span>
      </div>
<div>
  <Button disabled={favorite} onClick={handleFavaroute} className='text-warning' variant="link"><FaHeart></FaHeart></Button>
  <Toaster/>
  
</div>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Recipe;