const express = require("express");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const port = 8080;

app.use(cors());

app.get("/articles", (req, res) => {
  MongoClient.connect("mongodb://root:example@mongo:27017").then((client) => {
    const db = client.db("explore_edinburgh");
    const articlesCollection = db.collection("articles");
    articlesCollection
      .find({})
      .toArray()
      .then((articles) => res.json({ articles: articles }));
  });
});

// test
app.get("/api/test", (req, res) => {
  res.send({ testworks: true });
});
// test

app.listen(port, () => {
  console.log(`Explore Edinburgh listening at http://52.56.174.117:${port}`);
});
