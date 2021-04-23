import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class signupRestaurante extends Component {
  render() {
    return (
      <div>
        <div style={signupStyleDiv}>
        <Card.Img src="./signupRestaurant.gif" alt="rh" style={{ width: "24rem", boxShadow: "0px 4px 6px #888888"}}/>

          <h4 style={{marginTop: "3vw"}}>  
            <b> Signup Restaurante </b>
          </h4>
          <div
            style={
              (signupStyleSubDiv, { paddingLeft: "12vw", paddingRight: "12vw" })
            }
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  
                  <b> Email </b>
                </Form.Label>
                <Form.Control type="email" placeholder="Insira seu email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <b> Confirme seu email</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira seu email novamente"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <b> Password </b>
                </Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <b> Categoria </b>
                </Form.Label>
                <Form.Control as="select">
                  <option> ex1 </option>
                  <option>ex2</option>
                  <option>ex3</option>
                  <option>ex4</option>
                  <option>ex5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <b> Descrição</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Descreva você, seja criativo :D"
                />
              </Form.Group>

              <Button variant="dark" type="submit" style={buttonStyle}>
                <b> Cadastrar </b>
              </Button>
            </Form>
          </div>
          <div>
            <Card
              style={{
                marginTop: "3vw",
                marginLeft: "4vw",
                marginRight: "4vw",
              }}
            >
              <Card.Body>
                <b> Se você já realizou seu cadastro, realize o login: </b>
              </Card.Body>

              <Card.Link>
                <Link to="/login">
                  
                  <b> Login </b>
                </Link>
              </Card.Link>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
const signupStyleDiv = {
  marginTop: "16vw",
};

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
  boxShadow: "0px 3px 6px #888888"
};

export default signupRestaurante;