import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";
import Home from "./components/Home";
import Nav from "./components/Nav";

import {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
} from "./actions/userActions";

const API = "http://localhost:3001/api/v1/logged_in";

class App extends Component {
  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((obj) => {
        if (obj.logged_in) {
          this.handleLogin(obj);
        } else {
          this.handleLogout(obj);
        }
      });
  };

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/signup"
          render={() => <Signup handleLogin={this.handleLogin} />}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <Login history={props.history} handleLogin={this.handleLogin} />
          )}
        />
        <Route
          exact
          path="/home"
          render={() => (
            <>
              <Nav />
              <Home />
            </>
          )}
        />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
