import React, { Component } from "react";
import api from "../../utils/api.util";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

class PageRestaurant extends Component {
  state = {
    items: [],
    infoUser: {},
  };
  componentDidMount = async () => {
    const restaurant = await api.getRestaurant(this.props.dataUser.id);
    const item = await api.getItems(this.props.dataUser.id);
    console.log(item);
    this.setState({
      infoUser: restaurant,
      items: item,
    });
  };

  deleteItem = async (itemId) => {
    // PRecisa fazer a rota no back-end e api utils
  };

  render() {
    return (
      <div >
        <h2> Olá {this.state.infoUser.name} </h2>
        <p> {this.state.infoUser.description} </p>
        <h2> Seu Cardápio </h2>
        <div style={menuStyle}> 
         
          {this.state.items.map((item) => {
            return (
              <div>
                <Card style={{ borderStyle: "none", textAlign: "left" }}>
                  <Card.Body style={{ backgroundColor: "#9fe3d6" }}>
                     
                      <p  style={{
                        backgroundColor: "#fff",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        borderRadius: "10px",

                      }} > <b> {item.name}&nbsp;</b> - R${item.value} </p>
                      
                    <Card.Text>
                      {item.description}  / <b> {item.category} </b>
                    </Card.Text>
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
