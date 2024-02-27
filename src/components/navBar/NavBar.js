import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ height: "80px", marginBottom: "10px" }}
    >
      <Container>
        <Navbar.Brand
          style={{
            fontWeight: "700",
            color: "red",
            fontSize: "50px",
            marginRight: "100px",
          }}
          href="#"
        >
          NETFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favList">Favourite</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
