import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h3 className='text-danger' >this is main</h3>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;