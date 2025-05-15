import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'cloud', label: 'Cloud Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "images/ecomm.jpg",
      description: "A full-featured e-commerce platform with advanced inventory management and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "images/banking app.jpg",
      description: "Secure and user-friendly mobile banking application with biometric authentication.",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "Cloud Migration",
      category: "cloud",
      image: "images/cloud.avif",
      description: "Enterprise cloud migration and optimization project for a financial institution.",
      technologies: ["AWS", "Docker", "Kubernetes"]
    },
    {
      id: 4,
      title: "UI/UX Redesign",
      category: "design",
      image: "images/uiux.avif",
      description: "Complete UI/UX overhaul for a leading tech company's customer portal.",
      technologies: ["Figma", "Adobe XD", "HTML/CSS"]
    },
    {
      id: 5,
      title: "Healthcare Platform",
      category: "web",
      image: "images/healthcare.webp",
      description: "Comprehensive healthcare management system with patient records and appointment scheduling.",
      technologies: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "images/fitness.avif",
      description: "Mobile application for tracking workouts, nutrition, and health metrics.",
      technologies: ["Flutter", "Firebase", "REST API"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-5">
      <Container>
        <div className="section-header" data-aos="fade-up">
          <h2>Our Portfolio</h2>
          <div className="underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`btn ${activeFilter === filter.id ? 'btn-accent' : 'btn-outline-light'}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <Row className="g-4">
          {filteredProjects.map((project, idx) => (
            <Col key={project.id} md={6} lg={4} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <Card className="portfolio-card h-100 border-0">
                <div className="portfolio-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-content">
                      <h5 className="text-light mb-3">{project.title}</h5>
                      <p className="text-light-emphasis mb-3">{project.description}</p>
                      <div className="portfolio-tech-stack">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="h4 mb-2">{project.title}</Card.Title>
                  <Card.Text className="text-light-emphasis">
                    {project.description}
                  </Card.Text>
                  <div className="portfolio-tech-stack mt-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio; 