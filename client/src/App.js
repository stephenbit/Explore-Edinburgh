import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Articles from "./components/Articles.js";
// import SingleArticle from "./components/SingleArticle.js";

// const ipAddress = "localhost";
const ipAddress = "52.56.174.117";

function App() {
  const [articles, setArticles] = useState([]);
  const [singleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    fetch(`http://${ipAddress}:8080/articles`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  function getArticle(id) {
    for (let article of articles )
      if (id === article._id) setSingleArticle(article);
    console.log(singleArticle);
  }

  return (
    <>
      <Navbar />
      <Articles articles={articles} getArticle={getArticle} />
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
