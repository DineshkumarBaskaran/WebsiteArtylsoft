import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phonenumber = "918838877002";
    const { name, email, country, message } = formData;

    const url = `https://wa.me/${phonenumber}?text=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ACountry: ${encodeURIComponent(country)}%0AMessage: ${encodeURIComponent(message)}`;

    window.open(url, '_blank').focus();

    setFormData({
      name: '',
      email: '',
      country: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2>Contact Us</h2>
          <div className="underline"></div>
        </div>
        <Row className="g-4">
          <Col lg={6} data-aos="fade-right">
            <div className="contact-info glass-card p-4 h-100">
              <h3 className="h4 mb-4 text-accent">Get in Touch</h3>
              <p className="mb-4 text-light">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="contact-details">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-accent me-3 fs-4"></i>
                  <div>
                    <h4 className="h6 mb-1 text-light">Address</h4>
                    <p className="mb-0 text-light">382/1, Gurusamikottai, Pochampalli, Krishnagiri -635206</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill text-accent me-3 fs-4"></i>
                  <div>
                    <h4 className="h6 mb-1 text-light">Email</h4>
                    <p className="mb-0 text-light">www.@artlysoft.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-telephone-fill text-accent me-3 fs-4"></i>
                  <div>
                    <h4 className="h6 mb-1 text-light">Phone</h4>
                    <p className="mb-0 text-light">+91 8838877002 +91 9360208764 +91 7795949853</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="contact-form glass-card">
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label className="text-light">Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-light">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formCountry">
                      <Form.Label className="text-light">Country</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your Country" 
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="formMessage">
                      <Form.Label className="text-light">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" className="btn-accent">
                      Send Via WhatsApp
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 