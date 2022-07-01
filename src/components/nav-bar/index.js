import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(props){
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Jeff Whitehead</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#about" onClick={()=>props.renderCurrentPage("aboutme")}>About Me</Nav.Link>
        <Nav.Link href="#contact" onClick={()=>props.renderCurrentPage("contact")}>Contact</Nav.Link>
        <Nav.Link href="#portfolio" onClick={()=>props.renderCurrentPage("portfolio")}>Portfolio</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;