import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => (
  <Navbar bg="light" expand="lg" className="py-2">
    <Container fluid>
      <Navbar.Brand href="/" className="fw-bold header-brand">
        <span className="header-icon">⚡</span>
        HUMAN TESTER
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;