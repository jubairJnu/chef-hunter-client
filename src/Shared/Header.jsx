import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary mb-3'>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>      
          </Nav>
          
            <Button variant="outline-success">Search</Button>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;