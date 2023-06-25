import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light p-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Chef Master</h5>
            <p>
              Chef Master is a renowned chef known for his expertise in American cuisine. With over 10 years of culinary experience, he has mastered the art of creating delicious and innovative dishes. His passion for food is evident in his wide range of recipes that showcase his unique style and creativity.
            </p>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Phone: 123-456-7890</li>
              <li>Email: chefjohn@example.com</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Chef Master. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;