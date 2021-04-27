import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";
import api from "../utils/api.util.js";


class AddItemForm extends Component { 
    constructor (props) {
        super(props)
    this.state = { 
        restaurant_id: props.dataUser.id, 
        name: '', 
        value: '', 
        description: '', 
        category: ''
    }
    }

    handleInput = (event) => {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
    }
    handleSubmit = async (event) => { 
       event.preventDefault(); 
       try {
           const { restaurant_id, name, value, description, category } = this.state
            const data =  await api.createItem(restaurant_id, name, value, description, category)
            console.log(data)
           this.props.history.push("/restaurant");
       } catch (error) {
           
       }
     
    }

render() { 
    return ( 

  <Form>
  <Form.Group constrolId='AddItem'> 
  <Form.Label> Nome do Item </Form.Label> 
  <Form.Control  
   name="name"
    type="text"
    placeholder="Insira o nome do Item"
    value={this.state.name}
    onChange={this.handleInput} > 
    </Form.Control> 
     <Form.Label> Descrição </Form.Label> 
  <Form.Control  
   name="description"
    type="text"
    placeholder="Insira a descrição do item"
    value={this.state.description}
    onChange={this.handleInput} > 
    </Form.Control> 
      <Form.Label> Valor </Form.Label> 
  <Form.Control  
   name="value"
    type="text"
    placeholder="Insira o valor do Item"
    value={this.state.value}
    onChange={this.handleInput} > 
    </Form.Control> 
      <Form.Label> Categoria </Form.Label>
    <Form.Control  
   name="category"
    type="text"
    placeholder="Insira a categoria"
    value={this.state.category}
    onChange={this.handleInput} > 
    </Form.Control> 
  </Form.Group> 
  <Button variant="dark" type='submit' onClick={this.handleSubmit}> Adicionar </Button>    
  </Form> 
        
        

    )
}}; 

const homeStyleDiv = {
  marginTop: "16vw",
};

export default AddItemForm;






