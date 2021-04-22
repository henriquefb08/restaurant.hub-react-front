import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mainpage.css";

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={navbarClass}>
          <Navbar.Brand href="#home">Restaur@nt.hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link style={linkStyle} to="/">
                Home
              </Link>
              <Link style={linkStyle} to="/login">
                Login
              </Link>
              <NavDropdown
                title="Quero me cadastrar"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="menu" href="#action/3.1">
                  <Link style={linkStyle} to="/signupConsumer">
                    Sou Consumidor
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="menu" href="#action/3.2">
                  <Link style={linkStyle} to="/signupRestaurant">
                    Sou restautante
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

    
     
        </div>
    );
  }
}
const navbarClass = {
  backgroundColor: "#f56e2c",
  color: "#fff",
  borderBottom: "#695d47 solid 3px",
};

const linkStyle = {
  color: "Black",
};

export default Menu;

// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro
