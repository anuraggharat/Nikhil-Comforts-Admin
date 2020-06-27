import React, { Component } from 'react';
import './App.css';
import {  Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import Login from "./login/login"
import AddBlog from './shared/add_blog/add_blog'
import AddProject from './shared/add_project/add_project'
import Register from './register/register'

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
      logginStatus: true
    };
  }

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      localStorage.getItem("token")
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )
  
  onRouteChange = route => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  

    render() {
      return (
        <Router>
          <div className=" bg-white">
          <Switch>
              <Route exact path = {"/"} component={Login} />
              <this.PrivateRoute exact path = {"/AddBlog"} component={AddBlog} />
              <this.PrivateRoute exact path = {"/Register"} component={Register} />
              <this.PrivateRoute exact path = {"/AddProject"} component={AddProject} />
          </Switch>
        </div>
      </Router>
      );
    }
}

export default App;

