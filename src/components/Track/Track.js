import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from "../../assets/images/track.png";
import "./Track.css";

const Track = () => {
  return (
    <div>
      <Row>
        <Col md={4} className="tracking">
          <Container>
            <h1>MAP YOUR MOVES</h1>
            <p>Sudy the process ,when you train</p>
          </Container>
        </Col>
        <Col md={8} fluid={true} className="tracking-img">
          {" "}
          <img src={img} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Track;
