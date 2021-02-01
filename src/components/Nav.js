import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = () => {
  return (
    <nav className="flex justify-around border-b p-2 items-center lg:-space-x-72">
      <div className="flex">
        <Link to="/home">
          <h1 className="pacifico text-2xl active:text-gray-300 cursor-pointer">
            Petstagram&#x1F43E;
          </h1>
        </Link>
      </div>
      <div>
        <input
          className="focus:outline-none border border-gray-300 rounded bg-gray-100 text-center px-6 text-sm"
          placeholder="Search"
        />
      </div>
      <div className="flex space-x-6 items-center">
        <i className="fas fa-camera fa-lg"></i>
        <i className="fas fa-home fa-lg "></i>
        <i className="fab fa-facebook-messenger fa-lg"></i>
        <i className="far fa-compass fa-lg"></i>
        <i className="far fa-heart fa-lg"></i>
        <i className="far fa-user-circle fa-lg"></i>
        <button className="p-2 bg-blue-400 text-white rounded">Log Off</button>
      </div>
    </nav>
  );
};

export default Nav;
