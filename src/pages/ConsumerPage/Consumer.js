import React, { Component } from "react";
import api from '../../utils/api.util'

class PageConsumer extends Component {
 state = { 
   restaurantList:[]
 }
  componentDidMount = async () =>  {
      const restaurants = await api.getAllRestaurants(); 
      this.setState({ 
      restaurantList: restaurants

      })
  }
  render() {
    return (
      <div>
            <h1> consumer</h1>       
          <div> 

          {this.state.restaurantList.map(restaurant => { return <h2> {restaurant.name} </h2>  } )}


          </div>
      </div>
    );
  }
}


export default PageConsumer;
