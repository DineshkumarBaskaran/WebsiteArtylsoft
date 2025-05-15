import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: 'bi bi-facebook', url: 'https://facebook.com/artylsoft' },
    { name: 'Twitter', icon: 'bi bi-twitter', url: 'https://twitter.com/artylsoft' },
    { name: 'LinkedIn', icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/in/artlysoft-private-limited-864275315/' },
    { name: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/artly_soft?igsh=MXZrODc0NXZka2d2ZA==' },
  ];

  return (
    <footer className="footer-wrapper py-5 bg-dark text-light">
      <Container>
        <Row className="mb-5">
          <Col md={3} data-aos="fade-up" data-aos-delay="0">
            <h5 className="text-accent mb-3">About Artylsoft</h5>
            <p className="small text-white-emphasis">
              Driving digital innovation through expert IT solutions. We specialize in web, mobile, and enterprise applications tailored to your needs.
            </p>
          </Col>
          <Col md={3} data-aos="fade-up" data-aos-delay="100">
            <h5 className="text-accent mb-3">Resources</h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#portfolio" className="text-light text-decoration-none">Portfolio</a></li>
            </ul>
          </Col>
          <Col md={3} data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-accent mb-3">Contact</h5>
            <ul className="list-unstyled small">
              <li><i className="bi bi-geo-alt-fill me-2 text-accent"></i>382/1, Gurusamikottai, Pochampalli, Krishnagiri -635206</li>
              <li><i className="bi bi-envelope-fill me-2 text-accent"></i>www.@artlysoft.com</li>
              <li><i className="bi bi-telephone-fill me-2 text-accent"></i>+91 8838877002 +91 9360208764 +91 7795949853</li>
            </ul>
          </Col>
          <Col md={3} data-aos="fade-up" data-aos-delay="300">
            <h5 className="text-accent mb-3">Follow Us</h5>
            <div>
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-5 me-3"
                  title={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <h6 className="text-accent">Newsletter</h6>
              <div className="input-group input-group-sm mt-2">
                <input type="email" className="form-control" placeholder="Your email" />
                <button className="btn btn-accent">Go</button>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="small mb-0 text-light-emphasis">
              &copy; {currentYear} Artylsoft. Crafted with care & innovation.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
