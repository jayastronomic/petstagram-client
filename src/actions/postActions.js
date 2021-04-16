export const fetchPostsSuccess = (array) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    posts: array,
  };
};

export const openPostModal = (bool) => {
  return {
    type: "OPEN_POST_MODAL",
    bool: bool,
  };
};

export const closePostModal = (bool) => {
  return {
    type: "CLOSE_POST_MODAL",
    bool: bool,
  };
};
