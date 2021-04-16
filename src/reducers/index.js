import { combineReducers } from "redux";
import authUser from "./authUser";
import isLoggedIn from "./isLoggedIn";
import posts from "./posts";
import postModal from "./postModal";

export default combineReducers({
  authUser,
  isLoggedIn,
  posts,
  postModal,
});
