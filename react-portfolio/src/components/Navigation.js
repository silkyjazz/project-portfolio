import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Zoom} from 'react-awesome-reveal';

function NavTabs({handlePageChange}) {
  return (
    <Navbar >
        <Container>
          <Zoom>
            <Navbar.Brand href="#about"><h1 className="name-title" style={{ display: 'flex', justifyContent: 'center' }}>Jasmine Ulloa</h1></Navbar.Brand>
          <Nav className="me-auto" id="links">
          <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
          </Nav>
          </Zoom>
    
        </Container>
      </Navbar>
  );
}

export default NavTabs;
