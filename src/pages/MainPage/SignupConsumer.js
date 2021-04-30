import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../utils/Api.util.js";

class signupConsumer extends Component {
  state = {
    name: "",
    email: "",
    confirmEmail: "",
    description: "",
    password: "",
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
      await api.createConsumer(this.state);
      this.props.history.push("/loginConsumer");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
      
          <Card.Img
            src="./signupConsumer.gif"
            alt="rh"
            style={{ width: "24rem", boxShadow: "0px 4px 6px #888888" }}
          />
          <h3 style={{ marginTop: "3vw" }}>
            <b> Signup Consumidor </b>
          </h3>

          <div style={signupStyleSubDiv}>
            <Form>
              <Form.Group >
                <Form.Label>
                  <b> Nome </b>
                </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Insira seu nome"
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
                  <b> Confirme seu email </b>
                </Form.Label>
                <Form.Control
                  name="confirmEmail"
                  type="email"
                  placeholder="Insira seu email novamente"
                  value={this.state.confirmEmail}
                  onChange={this.handleInput}
                />
              </Form.Group>

              <Form.Group>
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

              <Form.Group >
                <Form.Label>
                  <b> Descrição </b>
                </Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Descreva você, seja criativo :D"
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
            style={{ margin: '30px' }}
          >
            <Card.Body>
              <b> Se você já realizou seu cadastro, realize o login:</b>
            </Card.Body>
           
              <Link to="/loginConsumer">
                <b> Login </b>
              </Link>
            
          </Card>
          </div>
        
      </div>
    );
  }
}

const signupStyleSubDiv = {
  paddingLeft: "7vw",
  paddingRight: "7vw",
  paddindBotton: "2vw",
  marginBotton: "2vw",
  marginLeft: "4vw",
  marginRight: "4vw",
};
const buttonStyle = {
  marginBotton: "20px",
  boxShadow: "0px 3px 6px #888888",
};

export default signupConsumer;
