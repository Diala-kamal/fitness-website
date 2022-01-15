import React from "react";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Reviews.css";
import runningImg from "../../assets/images/running.jpg";
import runningImg1 from "../../assets/images/running1.jpg";
import weights from "../../assets/images/weights.jpg";

const Reviews = () => {
  return (
    <div className="reviews">
      <Container>
        <Row>
          <h1>What our customers are saying</h1>
          <Col className="cardsAlign">
            <ReviewsCard img={runningImg} />
          </Col>
          <Col className="cardsAlign">
            <ReviewsCard img={runningImg1} />
          </Col>
          <Col className="cardsAlign">
            <ReviewsCard img={weights} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
