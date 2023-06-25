import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Private = ({children}) => {
const {user, loading}= useContext(AuthContext) ;
if(loading){
  return  <Spinner animation="border" variant="primary" />
}
if(user){
  return children;
}
  return <Navigate to='/login'></Navigate>
};

export default Private;