import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mainpage.css";
import api from "../utils/api.util";


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
      <div>
        {!this.props.loggedInUser ? (
          <div>
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="dark"
              style={navbarClass}
              fixed="top"
            >
              <Navbar.Brand href="#home"> <b> Restaur@nt.hub </b></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link style={linkStyle} to="/">
                  <b> Home </b>
                  </Link>
                  <Link style={linkStyle} to="/login">
                  <b> Login </b>
                  </Link>
                  <NavDropdown
                    title= "Quero me cadastrar"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item className="menu" href="#action/3.1">
                      <Link style={linkStyle} to="/signupConsumer">
                      <b> Sou Consumidor </b>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="menu" href="#action/3.2">
                      <Link style={linkStyle} to="/signupRestaurant">
                      <b>   Sou restautante </b>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        ) : (
          <div>
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="dark"
              style={navbarClass}
            >
              <Navbar.Brand href="#home"> <b> Restaur@nt.hub </b></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#editarPerfil"> <b> Editar Perfil </b></Nav.Link>
                  <Nav.Link href="#seusPedidos"><b> Seus pedidos </b></Nav.Link>
                 <Button onClick={() => this.logoutFunction()}> <b> Sair </b> </Button> 
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )}
      </div>
    );
  }
}
const navbarClass = {
  backgroundColor: "#74bcae",
  color: "#fff",
  borderBottom: "#74bcae solid 3px",
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
