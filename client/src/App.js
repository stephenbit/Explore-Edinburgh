import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Articles from "./components/Articles.js";
import Article from "./components/Article.js";

// const ipAddress = "localhost";
const ipAddress = "3.9.7.4";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(`http://${ipAddress}:8080/articles`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  function getArticle(id) {
    for (let article of articles) if (id === article._id) setArticle(article);
  }

  return (
    <>
      <Navbar />
      <Articles articles={articles} getArticle={getArticle} />
      <Article article={article} />
    </>
  );
}

export default App;
