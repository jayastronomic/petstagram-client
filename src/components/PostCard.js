import React from "react";

const PostCard = (props) => {
  return (
    <div className="border-gray-200 border-t w-full">
      <div className="p-2">{props.post.content}</div>
    </div>
  );
};

export default PostCard;
