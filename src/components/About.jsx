import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  const features = [
    {
      icon: 'bi bi-rocket-takeoff',
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and innovative solutions.'
    },
    {
      icon: 'bi bi-people',
      title: 'Expert Team',
      description: 'Our team consists of skilled professionals with years of industry experience.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Growth Focus',
      description: 'We help businesses scale and grow through strategic technology solutions.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in all our deliverables.'
    }
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <div className="section-header">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>
        <Row className="align-items-center g-4">
          <Col lg={6} data-aos="fade-right">
            <div className="about-image">
              <img
                src="images/artlysoft.png"
                alt="About Artylsoft"
                className="img-fluid w-100 rounded shadow"
              />
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="about-content">
              <h3 className="h2 mb-4 text-light">
                Transforming Businesses Through <span className="text-accent">Technology</span>
              </h3>
              <p className="lead mb-4 text-light-emphasis">
                At Artlysoft, we are passionate about helping businesses succeed in the digital age. 
                Our team of experts combines technical expertise with industry knowledge to deliver 
                innovative solutions that drive growth and efficiency.
              </p>
              <p className="mb-4 text-light-emphasis">
                With over a decade of experience, we have helped numerous organizations transform 
                their operations and achieve their business goals through strategic technology 
                implementation and digital innovation.
              </p>
              <div className="row g-4 mt-4">
                {features.map((feature, index) => (
                  <Col key={index} sm={6} data-aos="zoom-in" data-aos-delay={index * 100}>
                    <div className="feature-item glass-card p-3">
                      <i className={`${feature.icon} text-accent fs-4 mb-2`}></i>
                      <h4 className="h6 text-light mb-2">{feature.title}</h4>
                      <p className="small text-light-emphasis mb-0">{feature.description}</p>
                    </div>
                  </Col>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 