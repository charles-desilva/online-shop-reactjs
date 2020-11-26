import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="text-light">
        <Container className="justify-content-center">
          <h6>Handmade - 100% All Natural Body Care Products</h6>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="mr-5">
            <img
              alt=""
              src="/delicare-logo.svg"
              width="60"
              height="60"
              className="d-inline-block align-top logo-color"
            />{" "}
            <span>Delicare Cosmetics</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home" className="mr-3">
                Home
              </Nav.Link>
              <Nav.Link href="/login">Products</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/cart" className="mr-3">
                <i className="fa fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fa fa-user mr-2 fa-1x"></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
