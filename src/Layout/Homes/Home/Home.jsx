import React from 'react';
import banner from '../../../assets/banner-image/banner.jpg'
import banner1 from '../../../assets/banner-image/banner1.jpg'
import banner2 from '../../../assets/banner-image/banner2.jpg'
import './Home.css'
import { Carousel, Container } from 'react-bootstrap';

import { useLoaderData } from 'react-router-dom';
import Chefs from '../../../Pages/chefs/Chefs';
const Home = () => {
  const chefs = useLoaderData();
  
  console.log(chefs);
  return (
 <div>
   <Container className='banner'>
  
  <Carousel className='mb-3'>
<Carousel.Item>
 
<img
    className="d-block w-100"
    src={banner}
    alt="First slide"
  />
  
  
  <Carousel.Caption >
    <h1>The Best Food ever</h1>
    <p  >Order our food  And Enjoy It.
      <br /> It is more Popular and yummy
    </p>
  </Carousel.Caption>
  
</Carousel.Item>
<Carousel.Item >
<img
    className="d-block w-100"
    src={banner1}
    alt="First slide"
  />
  
  <Carousel.Caption >
    <h1 className='text-dark  mt-0' >Taste Burger</h1>
    <p>Order our food  And Enjoy It.
      <br /> It is more Popular and yummy
    </p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={banner2}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h1>Best Indian Food</h1>
    <p className='text-dark'>Order our food  And Enjoy It.
      <br /> It is more Popular and yummy
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

</Container>

{/* **chef */}

<div className='chef-card'>
  {
    chefs.map(chef=> <Chefs 
    key={chef.id}
    chef={chef}></Chefs> )
  }
</div>
<div>
  <h3>Our Best Food</h3>

</div>
 </div>
   
  );
};

export default Home;