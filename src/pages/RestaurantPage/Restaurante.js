import React, { Component } from 'react';
import api from "../../utils/api.util";
import { Link} from "react-router-dom";
import {Button} from "react-bootstrap";




 class PageRestaurant extends Component {
  state = {
    items: [],
    infoUser: {}

  };
  componentDidMount = async () => {
    const restaurant = await api.getRestaurant(this.props.dataUser.id);
    const item = await api.getItems(this.props.dataUser.id);
    console.log(item)
    this.setState({
      infoUser: restaurant,
      items: item
    });
  };

  deleteItem = async (itemId) => {
    // PRecisa fazer a rota no back-end e api utils
  }

    render() {
        return (
      <div style={homeStyleDiv}>
        <h2> Olá {this.state.infoUser.name}  </h2>
        <p> {this.state.infoUser.description}  </p>

        <div>
           <p>  {this.state.items.map((item) => {
             return (
             <>
              <h2> { item.name} </h2>
              <Button onClick={() => {this.deleteItem(item._id) }}> Delete Item </Button>
             </>
              )

           })} </p>
        </div>


      <Link to='/addItem'> Adicionar Item </Link>



        </div>
        )
    }
}
const homeStyleDiv = {
  marginTop: "16vw",
};
  export default PageRestaurant