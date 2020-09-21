import React, { useState, useEffect } from "react";
import "./App.css";
import BlogEntry from "./components/BlogEntry.jsx";
import Navbar from "./components/Navbar.jsx";

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
      <BlogEntry BlogEntry={BlogEntry} />
    </>
  );
}

export default App;
