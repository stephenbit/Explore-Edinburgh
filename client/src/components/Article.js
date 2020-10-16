import React from "react";
import "../App.css";

function Article({ article }) {
  return (
    <>
    <h1>{article.title}</h1>
      <p>{article.body}</p>
    </>
  );
}
export default Article;
