import React from "react";
import "../App.css";

function Articles({ articles, getArticleId, id }) {
  
  const handleClick = () => {
    getArticleId(id);
  }

    const articleList = articles.map((article) => {
      return (
        <li key={article._id} onClick={handleClick}>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </li>
      );
    });

    return <ul>{articleList}</ul>;
  }

export default Articles;
