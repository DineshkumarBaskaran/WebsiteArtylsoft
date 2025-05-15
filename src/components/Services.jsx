import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      icon: 'bi bi-code-square',
      title: 'Web Development',
      description: 'Custom web applications and responsive websites built with modern technologies.'
    },
    {
      icon: 'bi bi-phone',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: 'bi bi-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: 'bi bi-palette',
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive business growth.'
    }
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="service-card glass-card h-100">
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services; 