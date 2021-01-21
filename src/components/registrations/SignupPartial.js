import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignupPartial extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullName: "",
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="flex flex-col pt-8 space-y-2 w-3/4 pb-8">
        <input
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Email"
        />
        <input
          onChange={this.handleChange}
          name="fullName"
          value={this.state.fullName}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Full Name"
        />
        <input
          onChange={this.handleChange}
          name="username"
          value={this.state.username}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Username"
        />
        <input
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
          className="text-xs border border-gray-300 py-2 px-2 rounded focus:outline-none focus:border-gray-400 bg-gray-100"
          placeholder="Password"
        />
        <input
          className={
            this.state.email &&
            this.state.username &&
            this.state.fullName &&
            this.state.password
              ? "bg-blue-500 py-2 rounded font-bold text-white text-sm focus:outline-none cursor-pointer"
              : "bg-blue-200 py-2 rounded font-bold text-white text-sm focus:outline-none"
          }
          type="submit"
          value="Sign up"
          disabled={
            this.state.email &&
            this.state.username &&
            this.state.fullName &&
            this.state.password
              ? false
              : true
          }
        />

        <p className="text-xs text-gray-400 pt-4 text-center">
          By signing up, you agree to our{" "}
          <Link className="font-bold">Terms</Link> ,{" "}
          <Link className="font-bold">Data Policy</Link> and{" "}
          <Link className="font-bold">Cookies Policy</Link> .
        </p>
      </form>
    );
  }
}

export default SignupPartial;
