import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../App.css";

function Articles({ articles, getArticle }) {
  const handleClick = (id) => {
    getArticle(id);
  };

  const articleList = articles.map((article) => {
    const body = { __html: article.body };
    return (
      <li key={article._id} onClick={() => handleClick(article._id)}>
      <Link to={`/articles/${article._id}`}>
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={body} />
        </Link>
      </li>
    );
  });

  return <ul>{articleList}</ul>;
}
export default Articles;
