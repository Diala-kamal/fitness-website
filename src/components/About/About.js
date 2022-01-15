import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import aboutimg from "../../assets/images/about.png";
import aboutimg1 from "../../assets/images/about1.png";

const About = () => {
  return (
    <div className="about">
      <h1>LACE UP , RACE ON</h1>
      <Container>
        <Row>
          <Col md={3}>
            <img className="aboutimg" src={aboutimg} alt="" />{" "}
          </Col>
          <Col md={3}>
            {" "}
            <img className="aboutimg1" src={aboutimg1} alt="" />{" "}
          </Col>
          <Col md={6}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            nemo praesentium! Quod optio quisquam eos laboriosam illo, esse
            perferendis temporibus. Expedita architecto ipsam illum nam tempore
            quos omnis cum neque autem praesentium in eveniet laboriosam
            obcaecati, totam quisquam ad quas saepe. Ab omnis at nisi quibusdam
            dolor iure placeat voluptatum. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Porro unde illum incidunt consequuntur
            rerum? Odit modi unde soluta voluptatum tempore repellat voluptate
            quis omnis et iusto commodi sequi cumque tempora possimus eaque
            pariatur, ducimus voluptates nisi quibusdam qui. Tempora, eveniet?
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
