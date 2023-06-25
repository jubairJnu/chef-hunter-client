  import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
  import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
  const Login = () => {
    const {login, loading}= useContext(AuthContext);
    const handleLogin =event =>{
      event.preventDefault();
      const form =event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      login(email,password)
      .then(reuslt=>{
        const loggedUser = reuslt.user;
        console.log(loggedUser);
      })
      .catch(error=>{
        console.log(error);
      })

    }
    return (
      <div className='container p-4 mb-5 w-75 login'>
      <div className="container">
       <h2 className='text-center'>Please Login!!</h2>
       <form onSubmit={handleLogin} >
         <div className="mb-3">
           <label htmlFor="email" className="form-label">Email</label>
           <input
             type="email"
             className="form-control"
             id="email"
             name='email'
 
           />
         </div>
         <div className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input
             type="password"
             className="form-control"
             id="password"
             name='password'
           />
         </div>
         
          <button type="submit" className="btn btn-primary">Login</button>
         
         <p><small>New? <Link to="/signup" className='text-decoration-none' >Sign Up</Link> </small></p>
       </form>
     </div>
       </div>
    );
  };
  
  export default Login;