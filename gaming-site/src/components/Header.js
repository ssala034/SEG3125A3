import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="light" expand="lg" className="py-2">
    <Container fluid>
      <Navbar.Brand href="#" className="fw-bold" style={{ letterSpacing: '1px' }}>
        <span style={{ color: '#bdbdbd', fontWeight: 'bold', fontSize: '1.2rem', marginRight: '8px' }}>⚡</span>
        HUMAN BENCHMARK
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#" className="fw-bold">DASHBOARD</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#" className="fw-bold">SIGN UP</Nav.Link>
        <Nav.Link href="#" className="fw-bold">LOGIN</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;