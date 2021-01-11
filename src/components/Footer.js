import React from "react";
import { Nav, Col, Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
    <Nav className="navbar fixed-bottom navbar-light bg-light mt-5">
      <Col className="col-md-12 text-center">
        <span className="text-muted">©2020 | Steve Rodriguez | UT Austin Fullstack Bootcamp</span>
      </Col>
    </Nav>
    </Container>
  );
}

export default Footer;
