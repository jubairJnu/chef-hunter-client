import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
  const {user, logOut}=useContext(AuthContext);
  const handleLogout = ()=>{
    logOut()
    .then({})
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary mb-3'>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Chef <span className='text-warning'>Master</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>      
          </Nav>
         {user?.email}
            {
              user?<Button onClick={handleLogout} variant="outline-success">logout</Button>:<Link to="/login"><Button variant="outline-success">Login</Button></Link>
            }
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;