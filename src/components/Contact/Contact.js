import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from "../../assets/images/contact.png";
import "./Contact.css";
import List from "./List";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <Row>
        <Col className="contactImg" md={6}>
          <img src={img} alt="" />
        </Col>
        <Col md={6}>
          <Container className="contactInfo">
            <h1> GOT QUESTIONS</h1>
            <Row>
              <Col md={1} style={{ color: "#0453f1" }}>
                <List icon={<MdLocationPin />} />
                <List icon={<MdEmail />} />
                <List icon={<MdCall />} />
              </Col>
              <Col md={11}>
                <ul>
                  <li>
                    {" "}
                    <h3>Write Us</h3>
                    <span>123 Anywhere St., Any City, State 12345</span>
                  </li>
                  <li>
                    <h3>Send an Email</h3>
                    <span>hello@reallygreatsite.com</span>
                  </li>

                  <li>
                    <h3>Call Us</h3>
                    <span>123-456-7890</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
