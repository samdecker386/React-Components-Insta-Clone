//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSection from "../CommentSection/CommentSectionContainer";
// import data 

const PostsPage = ({props}) => {
  // set up state for your data
  return (
  <div className="posts-container-wrapper">
    {props.map((post, index) => (
      <Post post={post} key={index} />
    ))}
    </div>
  )
}

export default PostsPage;