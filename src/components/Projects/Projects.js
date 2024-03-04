import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Intelligent Security System"
              description="The Software solution that combines cutting-edge AI capabilities with robust custom training of YOLONAS models. Leveraging a curated dataset from Roboflow, the system detects multiple essential objects, identifies faces, and monitors motion within specified regions of interestand seamless real-time video processing. Notably, the system sends instant alerts to designated personnel in case of security breaches. It uses face_recognition, super_gradients,twilio and OpenCV library."
              ghLink="https://github.com/akashpat1098/Intelliegent_Security_Survillence_Project"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Platform-Ranker (Sentiment Analysis)"
              description="Platform Ranker Application that compares various educational platform using sentiment analysis of tweet of user and gives the best platform among them. Built using Python, nltk, Roberta model and MongoDb"
              ghLink="https://github.com/akashpat1098/Edu_Platform_Comparsion_Sytem-Sentiment_Analysis-"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="iNotebook Editor"
              description="The Notekeeper Webapp that is used to create, manage and delete notes by different users. It is built using MongoDb, ExpressJs, ReactJs, and NodeJs"
              ghLink="https://github.com/akashpat1098/iNotebook-MERN-App"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
