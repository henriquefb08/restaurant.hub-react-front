import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class signupConsumer extends Component {
  render() {
    return (
      <div>
        <h1> signup Consumer</h1>
        <div style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Confirme seu email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email novamente" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Descrição</Form.Label>
              <Form.Control type="text" placeholder="Descreva você, seja criativo :D" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>
            
          <Card style={{marginTop: '3vw'}}>
              
            <Card.Body>Se você já realizou seu cadastro, realize o login: </Card.Body> 
            <Card.Link> <Link to="/login">Login  </Link> </Card.Link>
        
          </Card>
          
        </div>
      </div>
    );
  }
}

export default signupConsumer;
