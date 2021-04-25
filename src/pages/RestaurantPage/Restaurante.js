import React, { Component } from 'react';
import api from "../../utils/api.util";


 class PageRestaurant extends Component {
  state = {
    items: [],
    infoUser: { description: "" }
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

    render() {
        return (
      <div style={homeStyleDiv}> 
        <h2> Olá {this.state.infoUser.name}  </h2>
        <p> {this.state.infoUser.description}  </p>
        
        <div>
           <p>  {this.state.items.name} </p> 
        </div> 



      </div>
        )
    }
}
const homeStyleDiv = {
  marginTop: "16vw",
};
  export default PageRestaurant