import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import DropDownAccount from "./DropDownAccount";

const TopAppBar = ({ title }) => {
  return (
    <Navbar expand="lg" style={{ boxShadow: "1px 1px 1px #D7D7D7" }}>
      <Container fluid>
        <Navbar.Brand style={{ visibility: "hidden" }}></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 d-flex">
            <Nav.Item className="align-items-center d-flex">{title}</Nav.Item>
            <DropDownAccount />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopAppBar;
