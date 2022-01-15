import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/carousel.png";
import "./Slider.css";
import Btn from "../Btn";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-st"
            src={img}
            alt="First slide"
          />
          <Carousel.Caption>
            <Container className="txt-st">
              <Row>
                <Col>
                  <h1>ARE YOU READY</h1>
                  <p>Be your own personal trainer</p>
                  <Btn text="RIGESTER NOW" />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="Second slide" />

          <Carousel.Caption>
            <Container className="txt-st">
              <Row>
                <Col>
                  <h1>ARE YOU READY</h1>
                  <p>Be your own personal trainer</p>{" "}
                  <Btn text="RIGESTER NOW" />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="Third slide" />

          <Carousel.Caption>
            <Container className="txt-st">
              <Row>
                <Col>
                  <h1>ARE YOU READY</h1>
                  <p>Be your own personal trainer</p>
                  <Btn text="RIGESTER NOW" />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
