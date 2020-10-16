import React from "react";
import "../App.css";

function SingleArticle({ id, articles }) {

  console.log(articles);
  return (
    <>
      <h1>The id of the article is {id}</h1>
      <p>{}</p>
    </>
  );
}
export default SingleArticle;
