import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(props){
    return (
        <Navbar bg="dark" expand="lg">
  <Container >
    <Navbar.Brand className="text-white" href="#home">Jeff Whitehead</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="text-white" href="#about" onClick={()=>props.renderCurrentPage("aboutme")}>About Me</Nav.Link>
        <Nav.Link className="text-white" href="#contact" onClick={()=>props.renderCurrentPage("contact")}>Contact</Nav.Link>
        <Nav.Link className="text-white" href="#portfolio" onClick={()=>props.renderCurrentPage("portfolio")}>Portfolio</Nav.Link>
        <Nav.Link className="text-white" href="#resume" onClick={()=>props.renderCurrentPage("resume")}>Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;