import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <span className="copy-right">Copyright 2022</span>
      <Container
        className="d-flex ms-5 me-auto"
        style={{ alignItems: "center", flex: "1" }}
      >
        <hr className="solid me-2" />
        <h2 style={{ color: "#fff" }}>Irosas</h2>
      </Container>

      <Container>
        <Row className="ms-auto ms-sm-2 ms-xs-2">
          <Col md={5} sm={12} xs={12} className="d-flex footer-row">
            <FaRegEnvelope style={{ color: "white", marginRight: "10px" }} />
            admin.irosas@gmail.com
          </Col>
          <Col md={3} sm={12} xs={12} className="d-flex footer-row">
            <FaPhone style={{ color: "white", marginRight: "10px" }} />
            (917) 112-245
          </Col>
          <Col md={4} sm={12} xs={12} className=" d-flex footer-row">
            <FaMapMarkerAlt style={{ color: "white", marginRight: "10px" }} />
            KTX Khu A - ĐHQG HCM
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
