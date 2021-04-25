import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import LoginConsumer from "./pages/MainPage/LoginConsumer";
import LoginRestaurant from "./pages/MainPage/LoginRestaurant";
import SignupConsumer from "./pages/MainPage/SignupConsumer";
import SignupRestaurante from "./pages/MainPage/SignupRestaurant";
import PageConsumer from "./pages/ConsumerPage/Consumer";
import PageRestaurant from "./pages/Restaurant/restaurante";
import Home from "./pages/MainPage/Home";
import { Component } from "react";
import EditConsumer from "./pages/ConsumerPage/editConsumer";

class App extends Component {
  state = {
    loggedInUser: false,
    dataUser: {type:''},
  };

  handleLogin = (value, user) => {
    this.setState({
      loggedInUser: value,
      dataUser: user,
    });
  };


  render() {
    return (
      <div className="App" style={appStyle}>
        <Navbar loggedInUser={this.state.loggedInUser} typeUser={this.state.dataUser.type}  />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/loginConsumer"
            render={(props) => (
              <LoginConsumer
                {...props}
                handleLogin={this.handleLogin}
              />
            )}
          />

          <Route
            path="/loginRestaurant"
            render={(props) => (
              <LoginRestaurant
                {...props}
                handleLogin={this.handleLogin}
              />
            )}
          />
           <Route
           path="/editConsumer"
            render={(props) => (
              <EditConsumer
                {...props}
                dataUser={this.state.dataUser}
              />
            )}
          />
          <Route path="/signupConsumer" component={SignupConsumer} />
          <Route path="/signupRestaurant" component={SignupRestaurante} />
          <Route
            path="/consumer"
            render={(props) => (
              <PageConsumer {...props} dataUser={this.state.dataUser} />
            )}
          />
           <Route
            path="/restaurant"
            render={(props) => (
              <PageRestaurant {...props} dataUser={this.state.dataUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const appStyle = {
  textAlign: "center",
};

export default App;
// 9fe3d6 - azul claro
// 74bcae - azul escuro
// d0c295 - bege
// 695d47 - marrom
// f56e2c - laranja escuro
// ffc107 - laranja claro
