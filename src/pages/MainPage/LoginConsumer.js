import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import api from "../../utils/Api.util.js";

class loginConsumer extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    typeUser: "consumer",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataUser = await api.loginConsumer(this.state);
      this.props.handleLogin(true, dataUser);
      this.props.history.push("/consumer");
    } catch (e) {
      console.log(e);
      this.setState({
        message: "Erro ao logar",
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Card.Img src="./hr.gif" alt="rh" />
          <h3> <b> Login Consumidor </b> </h3>
          {this.state.message && <h4> {this.state.message} </h4>}
          <p style={pStyle}>
            <b>Acesse sua conta criada com seu email e senha registrados.</b>
          </p>
          <div style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
            <Form>
              <Form.Group >
                <Form.Label>
                  <b> Email </b>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                  placeholder="Insira seu email"
                />
              </Form.Group>

              <Form.Group >
                <Form.Label>
                  <b> Password </b>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                  placeholder="Insira sua senha"
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                onClick={this.handleSubmit}
                style={buttonStyle}
              >
                Entrar
              </Button>
            </Form>

            <Card style={{ marginTop: "3vw" }}>
              <Card.Body>
                <b>
                  Se voc?? ainda n??o realizou seu cadastro, clique no link
                  abaixo:
                </b>
              </Card.Body>
              <Card.Link href="/signupConsumer" >
                   Sou Consumidor
              </Card.Link>
              <Card.Link href="/signupRestaurant">
                  Sou Restaurante 
              </Card.Link>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const pStyle = {
  marginTop: "20px",
  marginLeft: "30px",
  marginRight: "30px",
};
const buttonStyle = {
  marginBotton: "1vw",
  boxShadow: "0px 3px 6px #888888",
};

export default loginConsumer;
