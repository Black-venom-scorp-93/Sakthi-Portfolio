import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sb_admin_dashboard from "../../Assets/Projects/sb_admin_dashboard.png"
import admin_dashboard from "../../Assets/Projects/admin_dashboard.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={sb_admin_dashboard}
              isBlog={false}
              title="SB-Admin-2"
              description=" A responsive and dynamic Student Dashboard project made up using Reactjs, nodejs & Mongodb.The Student Dashboard, is the page where students can login and view their courses and course progress, task details and the certificates and achievements they have earned."
              ghLink="https://github.com/Black-venom-scorp-93/components"
              demoLink="https://flourishing-clafoutis-e9f80d.netlify.app/?"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={admin_dashboard}
              isBlog={false}
              title="Admin-Dashboard"
              description="The application I made is a Admin Dashboard management react application with CRUD operations.A responsive and dynamic library management project made up using Reactjs & bootstrap"
              ghLink="https://github.com/Black-venom-scorp-93/admin-dashboard"
              demoLink="https://tourmaline-paletas-ec0de0.netlify.app/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
