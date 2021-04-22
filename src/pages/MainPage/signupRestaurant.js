import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class signupRestaurante extends Component {
  render() {
    return (
      <div>
        <h1> signupRestaurante</h1>
        <div style={{ paddingLeft: "12vw", paddingRight: "12vw" }}>
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
              <Form.Control
                type="email"
                placeholder="Insira seu email novamente"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select">
                <option>ex1</option>
                <option>ex2</option>
                <option>ex3</option>
                <option>ex4</option>
                <option>ex5</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descreva você, seja criativo :D"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </Form>

          <Card style={{ marginTop: "3vw" }}>
            <Card.Body>
              Se você já realizou seu cadastro, realize o login:{" "}
            </Card.Body>
            <Card.Link>
              {" "}
              <Link to="/login">Login </Link>{" "}
            </Card.Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default signupRestaurante;
