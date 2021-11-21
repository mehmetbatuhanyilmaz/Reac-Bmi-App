import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function HeadNavbar() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
           Vücut Kitle İndeksi - BMI Hesaplayıcı
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="menu">
            Anasayfa
          </Link>

          <Link to="/about" className="menu">
            Hakkımızda
          </Link>
          <Link to="/BMI" className="menu">
            BMI Nedir?
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeadNavbar;
