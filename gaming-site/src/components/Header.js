import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">HumanTester</Navbar.Brand>
                <Navbar.Text>
                    A Memory Game to Test Your Skills
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Header;