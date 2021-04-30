import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import api from "../../utils/Api.util.js";

class signupRestaurante extends Component {
  state = {
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    categories: "",
    description: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.createRestaurant(this.state);
      this.props.history.push("/loginRestaurant");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
          <Card.Img
            src="./signupRestaurant.gif"
            alt="rh"
            style={{ width: "24rem", boxShadow: "0px 4px 6px #888888" }}
          />

          <h3 style={{ marginTop: "17px" }}>
            <b> Signup Restaurante </b>
          </h3>
          <div
            style={
              (signupStyleSubDiv, { paddingLeft: "12vw", paddingRight: "12vw" })
            }
          >
            <Form>
              <Form.Group >
                <Form.Label>
                  <b> Nome </b>
                </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Insira o nome do restaurante"
                  value={this.state.name}
                  onChange={this.handleInput}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>
                  <b> Email </b>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Insira seu email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>
                  <b> Confirme seu email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira seu email novamente"
                  name="confirmEmail"
                  value={this.state.confirmEmail}
                  onChange={this.handleInput}
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>
                  <b> Password </b>
                </Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Insira sua senha"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <b> Categoria </b>
                </Form.Label>
                <Form.Control
                  name="categories"
                  value={this.state.categories}
                  onChange={this.handleInput}
                  as="select"
                >
                  <option>Escolha a categoria</option>
                  <option>Japonesa</option>
                  <option>Brasileira</option>
                  <option>Italiana</option>
                  <option>Francesa</option>
                  <option>Indiana</option>
                  <option>Francesa</option>
                  <option>Fast Food</option>
                  <option>Outros</option>
                </Form.Control>
              </Form.Group>

              <Form.Group >
                <Form.Label>
                  <b> Descrição</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descreva você, seja criativo :D"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInput}
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                style={buttonStyle}
                onClick={this.handleSubmit}
              >
                <b> Cadastrar </b>
              </Button>
            </Form>
            <Card
              style={{margin:'20px'}}
            >
              <Card.Body>
                <b> Se você já realizou seu cadastro, realize o login: </b>
              </Card.Body>

              <Card.Link href="/loginRestaurant">
                  <b> Login </b>
              </Card.Link>
            </Card>
          </div>
          
      </div>
    );
  }
}

const signupStyleSubDiv = {
  paddingLeft: "6vw",
  paddingRight: "6vw",
  paddindBotton: "2vw",
  paddindTop: "4vw",
  marginTop: "1vw",
  marginBotton: "2vw",
  marginLeft: "3vw",
  marginRight: "3vw",
};
const buttonStyle = {
  marginBotton: "1vw",
  boxShadow: "0px 3px 6px #888888",
};

export default signupRestaurante;
