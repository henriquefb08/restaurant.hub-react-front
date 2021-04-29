import React, { Component } from "react";
import api from "../../utils/api.util";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

class MenuRest extends Component {
  state = {
    items: [],
    infoRest: {},
  };
  componentDidMount = async () => {
    const restaurant = await api.getRestaurant(this.props.match.params.rest_id);
    const item = await api.getItems(this.props.dataUser.id);
    console.log(item);
    this.setState({
      infoRest: restaurant,
      items: item,
    });
  };

  render() {
    return (
      <div>
        <h2> Olá {this.state.infoRest.name} </h2>
        <p> {this.state.infoRest.description} </p>

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
                   <Link onClick={()=>{this.removeItem(item._id)}}> <div> Remover </div> </Link> 
                 </Card.Body>
               </Card>
               
             </div>
           );
         })}
       </div>

        <Button variant='dark' onClick={() => this.props.history.push("/consumer")}>
          
          Voltar
        </Button>
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

export default MenuRest;
