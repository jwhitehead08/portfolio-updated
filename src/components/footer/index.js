import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="justify-content-end">
        <Navbar.Brand className="text-white ">
        &copy; 2022 Jeff Whitehead
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
