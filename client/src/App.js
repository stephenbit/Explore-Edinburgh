import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Posts from "./components/Posts.js";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <>
      <Navbar />
      <Posts posts={posts} />
    </>
  );
}

//id
//title
//author
//preview pic
//date/time
//body (html)
//full size pic of the preview pic
//tags

export default App;
