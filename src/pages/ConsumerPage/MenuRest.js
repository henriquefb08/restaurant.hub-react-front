import React, { Component } from "react";
import api from "../../utils/Api.util";
import { Button, Card } from "react-bootstrap";

class MenuRest extends Component {
  state = {
    items: [],
    infoRest: {},
  };
  componentDidMount = async () => {
    const restaurant = await api.getRestaurant(this.props.match.params.rest_id);
    const item = await api.getItems(this.props.match.params.rest_id);
   
    this.setState({
      infoRest: restaurant,
      items: item,
    });
  };

  render() {
    return (
      <div>
        <Card.Img style={cardImg} src="/restmenu.gif" alt="Card image" />
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <h3>
            <b> Seja bem vindo ao {this.state.infoRest.name} </b>
          </h3>
          <p>
            <i> {this.state.infoRest.description} </i>
          </p>
          <h4> Cardápio </h4>
        </div>
        <div style={menuStyle}>
          {this.state.items.map((item) => {
            return (
              <div key={item._id}>
                <Card style={{ borderStyle: "none", textAlign: "left" }}>
                  <Card.Body style={{ backgroundColor: "#9fe3d6" }}>
                    <span
                      style={{
                        backgroundColor: "#fff",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        borderRadius: "10px",
                      }}
                    >
                      <b> {item.name}&nbsp;</b> - R${item.value}
                    </span>

                    <Card.Text>
                      {item.description} / <b> {item.category} </b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        <Button
          variant="dark"
          onClick={() => this.props.history.push("/consumer")}
        >
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
  marginBottom: "18px",
  width: "auto",
  height: "auto",
};

const cardImg = {
  width: "330px",
  height: "auto",
  marginTop: "10px",
  marginBottom: "10px",
  boxShadow: "0px 4px 6px #888888",
};

export default MenuRest;
