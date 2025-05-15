import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      className={`navbar bg-whitesmoke ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-dark d-flex align-items-center gap-2">
          <img 
            src="images/logo.png" 
            alt="Artylsoft Logo" 
            height="50" 
            className="d-inline-block align-top"
          />
          <span className="fw-bold fs-4 text-dark mb-0">Artylsoft</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" spy={true} smooth={true} duration={500} onClick={handleNavClick} className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" spy={true} smooth={true} duration={500} onClick={handleNavClick} className="text-dark">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="services" spy={true} smooth={true} duration={500} onClick={handleNavClick} className="text-dark">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="portfolio" spy={true} smooth={true} duration={500} onClick={handleNavClick} className="text-dark">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="contact" spy={true} smooth={true} duration={500} onClick={handleNavClick} className="text-dark">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 