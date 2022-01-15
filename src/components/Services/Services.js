import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Card/Card";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsFillFlagFill } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";

import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <Container>
        <Row>
          <Col>
            <Card icon={<AiOutlineSchedule />} text="Go to Calender" />
          </Col>
          <Col>
            {" "}
            <Card icon={<BsFillFlagFill />} text="Explore Course" />
          </Col>
          <Col>
            {" "}
            <Card icon={<RiFileList3Line />} text="Learn More" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
