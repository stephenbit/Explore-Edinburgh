import React, { useState } from "react";
import "./App.css";

function BlogPosts({ BlogPost }) {
  const blogPosts = blogPosts.map((blogPost) => {
    return (
      <ul>
        <li key={blogPost.blogPost}>
          <p>{blogPost.body}</p>
        </li>
      </ul>
    );
  });
}

return (
    <>
      {blogPosts}
    </>
  );

export default BlogRoll;
