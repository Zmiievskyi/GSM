import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="w-100 fixed-top"
    >
      <Container>
        <Navbar.Brand href="/">GoIT Members</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link 
            className="nav-link" 
            to="/" 
            // onClick={onFilter}
            >
              Show all
            </Link>
            <Link 
            className="nav-link" 
            to="/followings" 
            // onClick={onFilter}
            >
              Followings
            </Link>
            <Link
              className="nav-link"
              to="/follow"
              // onClick={onFilter}
            >
              Follow
            </Link>
          </Nav>
          <Nav>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
