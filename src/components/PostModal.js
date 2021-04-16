import React from "react";
import PostForm from "./partials/PostForm";

import { closePostModal } from "../actions/postActions";
import { connect } from "react-redux";

const PostModal = (props) => {
  return (
    <div className="inset-0 bg-black bg-opacity-75 absolute flex justify-center items-center">
      <div className="bg-white w-1/2 rounded">
        <PostForm />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  closePostModal,
};

export default connect(null, mapDispatchToProps)(PostModal);
