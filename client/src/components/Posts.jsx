import React from "react";
import "../App.css";

function Posts({ posts }) {
  const postLis = posts.map((post) => {
    return (
      <li key={post._id}>
        <h1>{post.title}</h1>
        
        <p>{post.body}</p>
      </li>
    );
  });

  return <ul>{postLis}</ul>;
}
export default Posts;
