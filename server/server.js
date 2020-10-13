const express = require("express");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const port = 8080;

app.use(cors());

app.get("/posts", (req, res) => {
  MongoClient.connect("mongodb://root:example@mongo:27017").then((client) => {
    const db = client.db("explore_edinburgh");
    const postsCollection = db.collection("posts");
    postsCollection
      .find({})
      .toArray()
      .then((posts) => res.json({ posts: posts }));
  });
});

// test
app.get("/api/test", (req, res) => {
  res.send({ testworks: true });
});
// test

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
