import React, { Component } from "react";
import api from "../../utils/Api.util";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
class PageConsumer extends Component {
  state = {
    restaurantList: [],
    infoUser: { description: "" },
  };
  componentDidMount = async () => {
    const restaurants = await api.getAllRestaurants();
    const consumer = await api.getConsumer(this.props.dataUser.id);
    this.setState({
      restaurantList: restaurants,
      infoUser: consumer,
    });
  };

  render() {
    return (
      <div style={ConsumerStyleDiv}>
        <h5>
          <b> Olá {this.state.infoUser.name} </b>
        </h5>
        <p> {this.state.infoUser.description} </p>

        <div style={styleDivCards}>
          <h5>
            <b> Restaurantes disponíveis </b>
          </h5>
          <div className="d-flex justify-content-center flex-column align-items-center ">
            {this.state.restaurantList.map((restaurant) => {
              return (
                <Card key={restaurant._id}  style={{ width: "16rem" }} className="mt-3">
                  <Card.Body>
                    <Card.Title>
                      <b> {restaurant.name} </b>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {restaurant.categories}
                    </Card.Subtitle>
                    <Card.Text>
                      <span> {restaurant.description} </span>
                    </Card.Text>
                    <Link to={`/menuRest/${restaurant._id}`}>
                      <b> Ver Cardápio</b>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const ConsumerStyleDiv = {
  marginTop: "70px",
};

const styleDivCards = {
  border: "solid 1px #74bcae",
  borderRadius: "5px",
  margin: "20px 20px",
  backgroundColor: "#74bcae",
  padding: "15px 0px 10px 0px",
};

export default PageConsumer;
// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro
