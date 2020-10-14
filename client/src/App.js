import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Articles from "./components/Articles.js";
import SingleArticle from "./components/SingleArticle.js";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://52.56.174.117:8080/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      <Navbar />
      <Articles articles={articles} />
      <SingleArticle/>
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
