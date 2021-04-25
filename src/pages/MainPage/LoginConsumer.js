import React, { Component } from "react";
import { Form, Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../utils/api.util.js";

class loginConsumer extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    typeUser:"consumer", 
   
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataUser = await api.loginConsumer(this.state);
      this.props.handleLogin(true, dataUser)
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
      <div style={loginStyleDiv} >
      <Card.Img src="./hr.gif" alt="rh"/>
        <h3> Login Consumidor </h3>
        {this.state.message && <h4> {this.state.message} </h4>}
        <p style={pStyle}> <b> Acesse sua conta criada com seu email e senha registrados.</b> </p>
        <div style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> <b> Email </b></Form.Label>
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
              <Form.Label> <b> Password </b></Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
                placeholder="Insira sua senha"
              />
            </Form.Group>
        

            <Button variant="dark" type="submit" onClick={this.handleSubmit} style={buttonStyle}>
              Entrar
            </Button>
          </Form>

          <Card style={{ marginTop: "3vw" }}>
            <Card.Body>
             <b>  Se você ainda não realizou seu cadastro, clique no link abaixo:</b>
            </Card.Body>
            <Card.Link>
             
              <Link to="/signupConsumer"> <b> Sou Consumidor </b></Link>
            </Card.Link>
            <Card.Link>
              
              <Link to="/signupRestaurant"> <b> Sou Restaurante </b> </Link>
            </Card.Link>
          </Card>
        </div>
        </div>
      </div>
    );
  }
}
const loginStyleDiv = { 
  marginTop:"16vw"
}
const pStyle = {
  marginTop: "20px",
  marginLeft: "30px",
  marginRight: "30px"
};
const buttonStyle = {
  marginBotton: "1vw",
  boxShadow: "0px 3px 6px #888888"
};

export default loginConsumer;
