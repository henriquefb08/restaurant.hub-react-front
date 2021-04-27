import React, { Component } from 'react';
import api from "../../utils/api.util";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";



 class MenuRest extends Component {
  state = {
    items: [],
    infoRest: {}
    
  };
  componentDidMount = async () => {
    const restaurant = await api.getRestaurant(this.props.match.params.rest_id);
    const item = await api.getItems(this.props.dataUser.id);
    console.log(item)
    this.setState({
      infoRest: restaurant,
      items: item
    });
  };

    render() {
        return (
      <div> 
        <h2> Olá {this.state.infoRest.name}  </h2>
        <p> {this.state.infoRest.description}  </p>
        
           {/* <p>  {this.state.items.map((item) => { 
             return ( <h2> { item.name} </h2> )
           })} </p>  */}
  

        <Button onClick={() => this.props.history.push('/consumer') }> Voltar </Button> 

        </div>
        )
    }
}

  export default MenuRest