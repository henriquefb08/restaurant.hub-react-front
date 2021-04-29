import React, { Component } from "react";
import { Card, Button, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Card.Img style={cardImg} src="./capa.gif" alt="Card image" />

        <p style={pStyle}>
          <i>
            "Criado para você ter na palma da sua mão todos os cardápios dos
            melhores restaurantes de sua cidade! Agora só aproveitar o sabor da
            sua comida!"
          </i>
        </p>

        <hr style={hrStyle} />

        <Card style={{ borderStyle: "none", height: "auto" }}>
          <Card.Body>
            <Card.Text>
              <b>
                Aqui você pode ser consumidor e aproveitar o melhor de todos os
                cardápios ou ser um restaurante e ter seu cardápio na palma da
                mão de todos os seus clientes.
              </b>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ borderStyle: "none" }}>
          <Card.Body style={{ backgroundColor: "#9fe3d6" }}>
            <Card.Title>
              <b> Facilite seu pedido no restaurante aqui </b>
            </Card.Title>
            <Card.Text>
              Aqui você pode ser consumidor e aproveitar o melhor de todos os
              cardápios ou ser um restaurante e ter seu cardápio na palma da mão
              de todos os seus clientes.
            </Card.Text>
            <Card.Link href="/signupConsumer">
              <Button variant="dark" style={buttonStyle}>
                Aproveite
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
        <Card.Img src="./hr.gif" alt="rh" />

        <Card style={{ borderStyle: "none" }}>
          <Card.Body style={{ backgroundColor: "#fff" }}>
            <Card.Title>Seu cardápio com mais acessibilidade</Card.Title>
            <Card.Text>
              Para facilitar o uso do seu cardápio, a restaurant.hub facilita
              para seus clientes em um melhor formato de apresentação e estilo.
            </Card.Text>
            <Card.Link href="/signupRestaurant">
              <Button variant="dark" style={buttonStyle}>
                Cadastre seu restaurante
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const hrStyle = {
  display: "block",
  borderStyle: "solid",
  borderWidth: "2px",
  color: "#74bcae",
};

const cardImg = {
  width: "320px",
  height: "auto",
  boxShadow: "0px 4px 6px #888888",
};

const pStyle = {
  marginTop: "20px",
};
const buttonStyle = {
  marginBotton: "1vw",
  boxShadow: "0px 3px 6px #888888",
};

// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro

export default Home;
