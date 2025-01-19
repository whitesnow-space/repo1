import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Button from "../../elements/button";
import { PATH } from "../../../consts";
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
          <Navbar.Brand>
            <Link to={PATH.INDEX} className="link">
              <img className="customNavbar-logo" src={logoUrl} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto customNavbar-list">
              <Link className="customNavbar-list-item link" to={PATH.PRICE}>
                Price
              </Link>
              <Link className="customNavbar-list-item link" to={PATH.SERVICE}>
                Service
              </Link>
              <Link className="customNavbar-list-item link" to={PATH.HELP}>
                Help and Contact
              </Link>
              <Link className="customNavbar-list-item link" to={PATH.BUSINESS}>
                For Business
              </Link>
            </Nav>
            <Nav>
              <Link to={PATH.BOOKING} className="link">
                <div className="customNavbar-button">
                  <Button
                    placeholder="Book now"
                    color="darkpurple"
                    withIcon={true}
                  />
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
