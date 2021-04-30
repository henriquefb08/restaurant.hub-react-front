import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../utils/Api.util";
class Menu extends Component {
  logoutFunction = async (event) => {
    try {
      await api.logout();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={navbarClass}
        fixed="top"
      >
        <Navbar.Brand href="/">
          <b> Restaur@nt.hub </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {!this.props.loggedInUser ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link style={linkStyle} to="/">
                <b> Home </b>
              </Link>
              <Link style={linkStyle} to="/loginConsumer">
                <b> Login Consumidor </b>
              </Link>
              <Link style={linkStyle} to="/loginRestaurant">
                <b> Login Restaurante </b>
              </Link>
              <NavDropdown
                title="Quero me cadastrar"
                id="collasible-nav-dropdown"
                style={{ margin: "0px 70px 0px 70px" }}
              >
                <NavDropdown.Item
                  className="menu"
                  href="/signupConsumer"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <b> Sou Consumidor </b>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="menu"
                  href="/signupRestaurant"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <b> Sou Restautante </b>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        ) : this.props.typeUser === "consumer" ? (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link style={linkStyle} to="/editConsumer">
                <b> Editar Perfil </b>
              </Link>
              <Button variant="dark" onClick={() => this.logoutFunction()}>
                <b> Sair </b>
              </Button>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link style={linkStyle} to="/editRestaurant">
                Editar Perfil
              </Link>
              <Button variant="dark" onClick={() => this.logoutFunction()}>
                <b> Sair </b>
              </Button>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    );
  }
}
const navbarClass = {
  backgroundColor: "#74bcae",
  color: "#fff",
  borderBottom: "#74bcae solid 3px",
};

const linkStyle = {
  marginBottom: "10px",
  color: "Black",
};

export default Menu;

// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro
