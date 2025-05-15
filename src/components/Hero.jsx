import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4 text-light">
              Transforming Ideas into <span className="text-accent">Digital Reality</span>
            </h1>
            <p className="lead mb-4 text-light-emphasis">
              We are a leading IT company specializing in innovative solutions that drive business growth and digital transformation.
            </p>
            <div className="d-flex gap-3">
              <Button
                as={Link}
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="btn-accent"
              >
                Get Started
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-image mt-4 mt-lg-0" data-aos="fade-left">
            <div>
              <img
                src="images/industry.jpg"
                alt="Digital Transformation"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 