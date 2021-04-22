import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./mainpage.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Card className="bg-dark text-white">
            <Card.Img className="CardImg" src="./teste1.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title> '' </Card.Title>
              <Card.Text>
                Criado para você ter na palma da sua mão todos os cardápios dos
                melhores restaurantes de sua cidade! Agora só aproveitar o sabor
                da sua comida!
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <p>
            Criado para você ter na palma da sua mão todos os cardápios dos
            melhores restaurantes de sua cidade!
          </p>
        </div>
        <hr style={{display: "block", 
                   marginTop: "0.9em", 
                    marginBottom: "0.9em",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderStyle: "solid",
                    borderWidth: "3px"
                    }}/>
        <div>
          <Card style={{ width: "23rem", borderStyle: "none" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>
           
          <Card style={{ width: "23rem", borderStyle: "none" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Card>

          
        </div>
        <div>
          <p> Restaurant list aqui </p>
        </div>
      </div>
    );
  }
}

export default Home;
