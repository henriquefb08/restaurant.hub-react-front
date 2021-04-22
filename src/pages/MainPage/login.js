import React, { Component } from "react";
import { Form, Button, Card, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../utils/api.util.js";

class login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    typeUser:"consumer"
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.login(this.state);
      this.props.history.push("/");
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
        <h1> Login </h1>
        {this.state.message && <h4> {this.state.message} </h4>}
        <p> Acesse sua conta criada com seu email e senha registrados. </p>
        <div style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
                placeholder="Insira seu email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
                placeholder="Insira sua senha"
              />
            </Form.Group>
            <ToggleButtonGroup name='typeUser' type='radio' value={this.state.typeUser} onChange={this.handleInput}> 
            <ToggleButton value='consumer'>Consumidor</ToggleButton> 
            <ToggleButton value='restaurant'>Restaurante</ToggleButton> 


            </ToggleButtonGroup>

            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Entrar
            </Button>
          </Form>

          <Card style={{ marginTop: "3vw" }}>
            <Card.Body>
              Se você ainda não realizou seu cadastro, clique no link abaixo:
            </Card.Body>
            <Card.Link>
             
              <Link to="/signupConsumer">Sou Consumidor </Link>
            </Card.Link>
            <Card.Link>
              
              <Link to="/signupRestaurant">Sou Restaurante </Link>
            </Card.Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default login;
