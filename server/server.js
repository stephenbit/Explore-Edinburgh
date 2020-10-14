const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const port = 8080;

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect("mongodb://root:example@mongo:27017", {
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db("explore_edinburgh");
  const articlesCollection = db.collection("articles");

  app.get("/articles", (req, res) => {
    articlesCollection
      .find({})
      .toArray()
      .then((articles) => res.json({ articles: articles }));
  });

  app.get("/articles/:id", (req, res) => {
    const id = req.params.id;
    articlesCollection
      .findOne({ _id: ObjectID(id) })
      .then((article) => res.json(article));
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
