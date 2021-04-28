import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import api from "../utils/api.util.js";

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_id: props.dataUser.id,
      name: "",
      value: "",
      description: "",
      category: "",
    };
  }

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
      const { restaurant_id, name, value, description, category } = this.state;
      const data = await api.createItem(
        restaurant_id,
        name,
        value,
        description,
        category
      );
      console.log(data);
      this.props.history.push("/restaurant");
    } catch (error) {}
  };

  render() {
    return (
      <>
         <Card.Img
          src="./signupRestaurant.gif"
          alt="rh"
          style={{ width: "24rem", boxShadow: "0px 4px 6px #888888" }}
        />
      <div> 
      <h3 style={{ marginTop: "10px" }}>
          <b> Editar perfil</b>
        </h3>
      </div>
      <div
      style={
        (signupStyleSubDiv, { paddingLeft: "10vw", paddingRight: "10vw" })
      }
    >
      <div>     </div>
      <Form>
        <Form.Group constrolId="AddItem">
          <Form.Label> <b> Nome do Item </b> </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Insira o nome do Item"
            value={this.state.name}
            onChange={this.handleInput}
          ></Form.Control>
          <Form.Label> <b> Descrição </b></Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Insira a descrição do item"
            value={this.state.description}
            onChange={this.handleInput}
          ></Form.Control>
          <Form.Label> <b> Valor </b>  </Form.Label>
          <Form.Control
            name="value"
            type="text"
            placeholder="Insira o valor do Item"
            value={this.state.value}
            onChange={this.handleInput}
          ></Form.Control>
          <Form.Label> <b> Categoria </b> </Form.Label>
          <Form.Control
            name="category"
            type="text"
            placeholder="Insira a categoria"
            value={this.state.category}
            onChange={this.handleInput}
          ></Form.Control>
        </Form.Group>
        <Button style={buttonStyle} variant="dark" type="submit" onClick={this.handleSubmit}>
         <b>  Adicionar </b>
        </Button>
      </Form>
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
      </div>
      </>
    );
  }
}
const signupStyleSubDiv = {
  paddingLeft: "5vw",
  paddingRight: "5vw",
  paddindBotton: "2vw",
  paddindTop: "4vw",
  marginTop: "1vw",
  marginBotton: "2vw",
  marginLeft: "3vw",
  marginRight: "3vw",
};
const buttonStyle = {
  marginBotton: "10px",
  marginLeft: '9px',
  marginRight: '10px',
  boxShadow: "0px 3px 6px #888888",
};

export default AddItemForm;
