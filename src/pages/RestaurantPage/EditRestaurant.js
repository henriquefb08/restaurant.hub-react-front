import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import api from "../../utils/Api.util";

class EditRestaurant extends Component {
  state = {
    name: "",
    categories: "",
    description: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCancel = async (event) => { 
    event.preventDefault();
    try {
      this.props.history.push("/restaurant");
    } catch (e) {
      console.log(e);
    }};

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.editRestaurant(this.state, this.props.dataUser.id);
      this.props.history.push("/restaurant");
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    try {
      const infoRestaurant = await api.getConsumer(this.props.dataUser.id);
      this.setState({
        name: infoRestaurant.name,
        description: infoRestaurant.description,
        categories: infoRestaurant.categories,
      });
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
          <b> Editar perfil</b>
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
              <b> Salvar edição </b>
            </Button>
            <Card.Link href="/restaurant" >
              <Button
                variant="danger"
                type="submit"
                style={{ marginTop: "10px", boxShadow: "0px 3px 6px #888888" }}
                onClick={this.handleCancel}
              >
                <b> Cancelar edição </b>
              </Button>
            </Card.Link>
          </Form>
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
  marginBotton: "10px",
  marginLeft: '10px',
  marginRight: '10px',
  boxShadow: "0px 3px 6px #888888",
};

export default EditRestaurant;
