import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import Button from "../../elements/button";

import "./styles.scss";

const CustomNavbar = () => {
  const logoUrl = "assets/images/logo.png";
  return (
    <div className="row">
      <Navbar
        className="customNavbar col-10 mx-auto"
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="customNavbar-logo" src={logoUrl} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto customNavbar-list">
              <Nav.Link className="customNavbar-list-item" href="#Price">
                Price
              </Nav.Link>
              <Nav.Link className="customNavbar-list-item" href="#Service">
                Service
              </Nav.Link>
              <Nav.Link className="customNavbar-list-item" href="#Help">
                Help and Contact
              </Nav.Link>
              <Nav.Link className="customNavbar-list-item" href="#Business">
                For Business
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <div className="customNavbar-button">
                  <Button
                    placeholder="Book now"
                    color="darkpurple"
                    withIcon={true}
                  />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
