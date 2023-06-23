import React from 'react';
import banner from '../../../assets/banner-image/banner.jpg'
import './Home.css'
const Home = () => {
  return (
    <div className='container shadow p-3 mb-5 bg-body-tertiary rounded'>
      <div className="banner d-lg-flex ">
        <section className='banner-text me-2 rounded-2' >
          <h5> Taste Our Recipe </h5>
        </section>
        <section className='rounded-3'>
<img src={banner} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Home;