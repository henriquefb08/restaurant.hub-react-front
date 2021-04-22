import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/MainPage/paginaPrincipal";
import Login from './pages/MainPage/login';
import SignupConsumer from "./pages/MainPage/signupConsumer";
import SignupRestaurante from "./pages/MainPage/signupRestaurant";
import Home from "./pages/MainPage/home";
import { Component } from "react";

class App extends Component {
  state = { 
    loggedInUser:false, 
  }

  handleLogin = (value) => { 
    this.setState({ 
      loggedInUser: value
    })
  }
  render() { 
  return (
    <div className="App" style={appStyle}>
      <PaginaPrincipal/> 
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/login" render = { (props) =>  <Login {...props} handleLogin={this.handleLogin} /> } />
        <Route path="/signupConsumer" component={SignupConsumer} />
        <Route path="/signupRestaurant" component={SignupRestaurante} />
      </Switch>
    </div>
  );
}}

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
