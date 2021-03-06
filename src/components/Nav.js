import React from "react";

import PostModal from "./PostModal";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { togglePostModal } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/logout";

const Nav = (props) => {
  const redirect = () => {
    props.history.push("/");
  };

  const logOut = (e) => {
    e.preventDefault();

    fetch(API, { method: "DELETE", credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => props.handleLogout(resObj))
      .catch((err) => console.log(err));

    redirect();
  };

  return (
    <>
      <nav className="flex justify-around border-b p-2 items-center lg:-space-x-72">
        <div className="flex">
          <Link to="/home">
            <h1 className="pacifico text-2xl active:text-gray-300 cursor-pointer">
              Postagram
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
          <i
            onClick={() => props.togglePostModal(true)}
            className="cursor-pointer fas fa-edit fa-lg"
          ></i>
          <i className="cursor-pointer fas fa-home fa-lg "></i>
          <i className="cursor-pointer fab fa-facebook-messenger fa-lg"></i>
          <i className="cursor-pointer far fa-compass fa-lg"></i>
          <i className="cursor-pointer far fa-heart fa-lg"></i>
          <Link to="/profile">
            <i className="cursor-pointer far fa-user-circle fa-lg"></i>
          </Link>
          <button
            onClick={logOut}
            className="p-2 bg-blue-400 text-white rounded focus:outline-none"
          >
            Log Off {props.username}
          </button>
        </div>
      </nav>
      {props.postModal && <PostModal />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.authUser.username,
    postModal: state.postModal,
  };
};

const mapDispatchToProps = {
  togglePostModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
