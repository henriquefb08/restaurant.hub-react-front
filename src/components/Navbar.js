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
     
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="dark"
              style={navbarClass}
              fixed="top"
            >
              <Navbar.Brand href="#home"> <b> Restaur@nt.hub </b></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {!this.props.loggedInUser ? (
          

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
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
          
        ) : this.props.typeUser === 'consumer' ? (
          
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Link style={linkStyle}to="/editConsumer"> <b> Editar Perfil </b></Link>
                  <Link style={linkStyle} to="#seusPedidos"><b> Seus pedidos </b></Link>
                 <Button onClick={() => this.logoutFunction()}> <b> Sair </b> </Button> 
                </Nav>
              </Navbar.Collapse>
          
        ) : ( 
     
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link style={linkStyle} to="#editarPerfil">Editar Perfil</Link>
              <Link  style={linkStyle} to="#editarCardapio">Editar Cardápio</Link>
              <Link style={linkStyle} to="#pedidos">Pedidos</Link>
              <Button onClick={() => this.logoutFunction()}> <b> Sair </b> </Button> 
        
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
  color: "Black",
};

export default Menu;

// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro
