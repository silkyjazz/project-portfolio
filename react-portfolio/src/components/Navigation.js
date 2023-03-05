import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function NavTabs({handlePageChange}) {
  return (
    <Navbar >
        <Container>
          <Nav className="me-auto">
          <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavTabs;
