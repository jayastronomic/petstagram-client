import React, { Component } from "react";
import PostsContainer from "../containers/PostsContainer";
import { connect } from "react-redux";

import { fetchPostsSuccess } from "../actions/postActions";

const API = "http://localhost:3001/api/v1/posts";

class Home extends Component {
  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj) {
          console.log(resObj);
          this.props.fetchPostsSuccess(resObj);
        }
      });
  }

  render() {
    if (this.props.posts.length > 0) {
      return (
        <div className="flex h-screen">
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          <PostsContainer posts={this.props.posts} />
          <div className="w-1/4 h-screen bg-gray-200 overflow-hidden"></div>
          {/* <PostsContainer posts={this.props.posts} /> */}
        </div>
      );
    } else {
      return <div>There are no posts</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  fetchPostsSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
