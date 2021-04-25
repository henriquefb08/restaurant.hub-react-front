import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div style={homeStyleDiv}>
          <Card.Img style={cardImg} src="./capa.gif" alt="Card image" />

          <p style={pStyle}>
            <i>
              "Criado para você ter na palma da sua mão todos os cardápios dos
              melhores restaurantes de sua cidade! Agora só aproveitar o sabor
              da sua comida!"
            </i>
          </p>

          <hr style={hrStyle} />

          <div>
            <Card style={{ width: "23rem", borderStyle: "none" }}>
              <Card.Body>
                <Card.Text>
                  <h5>
                    <b>
                      Aqui você pode ser consumidor e aproveitar o melhor de
                      todos os cardápios ou ser um restaurante e ter seu
                      cardápio na palma da mão de todos os seus clientes.
                    </b>
                  </h5>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "390px", height: "auto", borderStyle: "none" }}
            >
              <Card.Body style={{ backgroundColor: "#9fe3d6" }}>
                <Card.Title>
                  <h4>
                    <b> Facilite seu pedido no restaurante aqui </b>
                  </h4>
                </Card.Title>
                <Card.Text>
                  <p>
                    Aqui você pode ser consumidor e aproveitar o melhor de todos
                    os cardápios ou ser um restaurante e ter seu cardápio na
                    palma da mão de todos os seus clientes.
                  </p>
                </Card.Text>
                <Card.Link href="/signupConsumer">
                  <Button variant="dark" style={buttonStyle}>
                    Aproveite
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
            <Card.Img src="./hr.gif" alt="rh" style={{ width: "390px" }} />

            <Card style={{ width: "24rem", borderStyle: "none" }}>
              <Card.Body style={{ backgroundColor: "#fff" }}>
                <Card.Title>
                  <h4>
                    <b> Seu cardápio com mais acessibilidade </b>
                  </h4>
                </Card.Title>
                <Card.Text> 
                  <p>
                    Para facilitar o uso do seu cardápio, a restaurant.hub
                    facilita para seus clientes em um melhor formato de
                    apresentação e estilo.
                  </p>
                </Card.Text>
                <Card.Link href="/signupRestaurant">
                  <Button variant="dark" style={buttonStyle}>
                    Cadastre seu restaurante
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <p> Restaurant list aqui </p>
          </div>
        </div>
      </div>
    );
  }
}
const homeStyleDiv = {
  marginTop: "16vw",
};
const hrStyle = {
  display: "block",
  marginTop: "0.10em",
  marginBottom: "0.10em",
  marginLeft: "45px",
  marginRight: "45px",
  borderStyle: "solid",
  borderWidth: "2px",
  color: "#74bcae",
};

const cardImg = {
  width: "380px",
  height: "auto",
  marginBotton: "40vw",
  boxShadow: "0px 4px 6px #888888",
};

const pStyle = {
  marginTop: "20px",
  marginLeft: "30px",
  marginRight: "30px",
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
