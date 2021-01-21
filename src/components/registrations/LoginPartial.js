import React, { Component } from "react";
import "../../styles/LoginPartial.css";

class LoginPartial extends Component {
  constructor() {
    super();
    this.state = {
      usernameOrEmail: "",
      password: "",
      showPassword: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showPassword = (e) => {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    return (
      <form className="flex flex-col space-y-4 mt-12 w-3/4">
        <input
          name="usernameOrEmail"
          value={this.state.usernameOrEmail}
          onChange={this.handleChange}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Username or email"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Password"
          type={this.state.showPassword ? "text" : "password"}
        />

        {this.state.password.length >= 1 ? (
          <button
            onClick={this.showPassword}
            className="self-end w-2/12 focus:outline-none transform -translate-y-9 -translate-x-2 text-sm font-bold w-auto"
          >
            {this.state.showPassword ? "Hide" : "Show"}
          </button>
        ) : null}

        <input
          className={
            this.state.password.length >= 6 &&
            this.state.usernameOrEmail.length >= 1
              ? "bg-blue-500 py-2 rounded font-bold text-white text-sm focus:outline-none cursor-pointer"
              : "bg-blue-200 py-2 rounded font-bold text-white text-sm focus:outline-none"
          }
          type="submit"
          value="Log in"
          disabled={
            this.state.password.length >= 6 &&
            this.state.usernameOrEmail.length >= 1
              ? false
              : true
          }
        />
      </form>
    );
  }
}

export default LoginPartial;
