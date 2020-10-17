import React from "react";
import "../App.css";

function Article({ article }) {
  const body = { __html: article.body };

  return (
    <>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={body} />
    </>
  );
}
export default Article;
