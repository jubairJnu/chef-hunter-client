import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const Chefs = ({chef}) => {
const {chef_id,name, picture, experience,recipes,likes}= chef;
  return (
    <div className='container'>
             <CardGroup className='gap-3'>
      <Card className='mb-3'>
        <Card.Img variant="top" src={picture}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           <p>Years of experiece:{experience} </p>
           <p>Number Of Recipe:{recipes} </p>
           <p>Likes:{likes} </p>
          </Card.Text>
        </Card.Body>
      
        <div className='d-flex justify-content-center'>
        <Button className='w-50' variant="primary">View Recipe</Button>
        </div>
        
      </Card>
     
    </CardGroup>
    </div>
  );
};

export default Chefs;