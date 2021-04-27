import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap";

 class MenuRestaurant extends Component {
    render() {
        return (
            <div>
                 <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          style={navbarClass}
        >
          <Navbar.Brand href="#home">Restaur@nt.hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#editarPerfil">Editar Perfil</Nav.Link>
              <Nav.Link href="#editarCardapio">Editar Cardápio</Nav.Link>
              <Nav.Link href="#pedidos">Pedidos</Nav.Link>
              <Nav.Link href="#logout">Sair</Nav.Link>
        
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <h1> restaurant</h1>

      </div>
        )
    }
}
const navbarClass = {
    backgroundColor: "#f56e2c",
    color: "#fff",
    borderBottom: "#695d47 solid 3px"
  };
  
  export default MenuRestaurant