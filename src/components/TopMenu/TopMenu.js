import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "./TopMenu.scss";

export default function TopMenu() {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav className="navbar-brand" />
        <MenuNav />
        {/* Carrito */}
      </Container>
    </Navbar>
  );
}

const BrandNav = () => (
  <Navbar.Brand>
    <Nav.Link href="/">
      <Logo />
    </Nav.Link>
    <h2>The Freak Store</h2>
  </Navbar.Brand>
);

const MenuNav = () => (
  <Nav className="mr-auto">
    <Nav.Link href="/">Inicio</Nav.Link>
    <Nav.Link href="/faqs">FAQS</Nav.Link>
    <Nav.Link href="/contacto">Contacto</Nav.Link>
  </Nav>
);
