import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/owl.png";
import emotion from "../../Assets/Projects/flood.png";
import editor from "../../Assets/Projects/hotel.png";
import chatify from "../../Assets/Projects/ml.png";
import suicide from "../../Assets/Projects/autapp.png";
import bitsOfCode from "../../Assets/Projects/sdp.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={owl}
              isBlog={false}
              title="Owl AI"
              description="*Auto-ESG Scoring *Visualize Data *Analyst Report Filling via AI powered webapp. Technolgies used Streamlit,Python,Pyspark,DataBricks,NetworkX,Pytorch,URllib3,Google Smart Auto Add-on
"
              ghLink="https://github.com/Pritish-Sinha/Owl_AI"
              demoLink="To be disclosed soon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flood}
              isBlog={false}
              title="Automated Flood Warning using AI"
              description="The project aims to create a model that can be used for effective disaster management. Uses remote sensing images in CNN model to detect floods in various areas.Flood Relief Coordinates updated."
              ghLink="https://github.com/Pritish-Sinha/GU-Cartograhpers"
              demoLink="https://pritish-sinha.github.io/GU-Cartograhpers/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Landing page"
              description="Used bootstrap tools & own styles. Implemented responsive template."
              ghLink="https://github.com/Pritish-Sinha/Landing_Page-Codingzap"
              demoLink="https://pritish-sinha.github.io/Landing_Page-Codingzap/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml}
              isBlog={false}
              title="Various ML Projects"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Pritish-Sinha/Machine-Leaning-Project"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autapp}
              isBlog={false}
              title="AI For Autism Patients"
              description="Autism is a neurological condition that decapitates patient of development in language and communication skills restraining him/her from any social interaction and develops rigid, ardent behavior.
             
              The app is open source mainly to educate the people who are suffering from autism. It will benefit patient to gain knowledge of communication. Also, they would get something that will accompany them all time, so that they won't feel lonely also ensuring anxiety risk in case of physical therapy methods. Requirements of the application is implemented by using Java Struts, JDBC, XHTML, CSS, JavaScript, and DOM."
              
               demoLink="https:https://ieeexplore.ieee.org/document/9758322"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sdp}
              isBlog={false}
              title="Social Distancing Patch"
              description="Social Distancing Patch using Arduino"
              ghLink="https://github.com/Pritish-Sinha/Social-Distancing-Patch"
              demoLink="https://wokwi.com/projects/303442773246214721"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
