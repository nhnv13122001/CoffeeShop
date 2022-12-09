import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import background from "../img/ContactPage/backgroudContact.png";
import "../index.css";
export default function ContactsPage() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <Row>
        <Col xs={7} lg={6} className="d-flex">
          <Row className="ms-lg-5 my-auto h-50">
            <h1 className="display-4" id="p1">
              {" "}
              ABOUT US{" "}
            </h1>
            <h2 className="display-4" id="p2">
              {" "}
              Bạn là bàn đạp để chúng tôi phát triển{" "}
            </h2>
            <p className="display-8" id="p3">
              Với mục tiêu đem lại trải nghiệm tốt nhất cho khách hàng, IROSAS
              COFFEE luôn sẵn sàng phục vụ những sản phẩm tốt nhất cho mọi
              người!!
            </p>
          </Row>
        </Col>
        <Col xs={5} lg={6} className="d-flex" style={{ color: "#7d6e83" }}>
          <Row className="ms-lg-5 h-25 my-auto">
            <p className="display-8">
              <FaRegEnvelope className="me-2" />
              <a
                href="mailto:admin_irosas@gmail.com"
                className="menu-item nav-link d-inline-block"
              >
                admin_irosas@gmail.com
              </a>
            </p>
            <p className="display-8">
              <FaPhone className="me-2" />
              (917) 112 - 245{" "}
            </p>
            <p className="display-8">
              <FaMapMarkerAlt className="me-2" />
              KTX Khu A - ĐHQG HCM{" "}
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
