import React, { useState, useEffect } from "react";
import "./App.css";
import BlogEntry from "./components/BlogEntry.jsx";
import Navbar from "./components/Navbar.jsx";
import BlogRoll from "./components/Navbar.jsx";


function App() {
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/explore_edinburgh")
      .then((res) => res.json())
      .then((data) => setBlogPost(data._embedded.blog_Posts));
  }, []);

  return (
    <>
      <Navbar Navbar={Navbar} />
      //BlogEntries NOT BlogEntry
      <BlogEntry BlogEntry={BlogEntry} />
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
