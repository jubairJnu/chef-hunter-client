import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chefs = ({chef}) => {
const {id, name,image, ingredients,likes,experience, recipes, description, cookingMethod, img, ratting}= chef;
  return (
    <div className='container'>
             <CardGroup className='gap-3'>
      <Card className='mb-3'>
        <Card.Img variant="top" src={image}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          <p>{experience} Years Of experience</p>
           <p>Number of Recipe {recipes.length} </p>
           <p>Likes:{likes} </p>
          </Card.Text>
        </Card.Body>
      
        <div className='d-flex justify-content-center'>
        <Link to ={`/chefs/${id}`}><Button variant="primary">View Recipe</Button></Link>
        </div>
        
      </Card>
     
    </CardGroup>
    </div>
  );
};

export default Chefs;