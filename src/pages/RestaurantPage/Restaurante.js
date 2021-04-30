import React, { Component } from "react";
import api from "../../utils/Api.util";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

class PageRestaurant extends Component {
  state = {
    items: [],
    infoUser: {},
  };
  // dentro da classe
loadItems = async () => {
  // tudo que tem dentro do didmount
  const restaurant = await api.getRestaurant(this.props.dataUser.id);
    const item = await api.getItems(this.props.dataUser.id);
    this.setState({
      infoUser: restaurant,
      items: item,
    });
}
componentDidMount = () => {
  this.loadItems();
}
removeItem = async (id) => {
  
  try {
    // o que já tem dentro do try
    await api.deleteItem(id)
    this.loadItems()
  } catch (error) {
    console.error(error) 
  }
}
 
  render() {
    return (
      <div >
         <div style={{marginLeft:'20px',marginRight:'20px'}}> 
        <h2> Olá {this.state.infoUser.name} </h2>
        <p> {this.state.infoUser.description} </p>
        </div>
        <h2> Seu Cardápio </h2>
        <div style={menuStyle}> 
         
          {this.state.items.map((item) => {
            return (
              <div>
                <Card style={{ borderStyle: "none", textAlign: "left" }}>
                  <Card.Body style={{ backgroundColor: "#9fe3d6" }}>
                     
                      <span  style={{
                        backgroundColor: "#fff",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        borderRadius: "10px",

                      }} > <b> {item.name}&nbsp;</b> - R${item.value} </span>
                      
                    <Card.Text>
                      {item.description}  / <b> {item.category} </b>
                    </Card.Text>
                    <Link onClick={()=>{this.removeItem(item._id)}} to='' > <b> Remover item </b> </Link> 
                  </Card.Body>
                </Card>
                
              </div>
            );
          })}
        </div>
        <Link to="/addItem">   <Button variant='dark'> Adicionar novo item </Button> </Link> 
      </div>
    );
  }
}
const menuStyle = {
  borderStyle: "solid",
  borderColor: "#9fe3d6",
  borderRadius: "10px",
  marginLeft: "20px",
  marginRight: "20px",
  marginBottom: '18px',
  width: "auto",
  height: "auto",
};

export default PageRestaurant;
// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro
