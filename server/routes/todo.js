const express = require("express");
const TodoModel = require("../models/TodoSchema");
const app = express();

app.get("/", async (req, res) => {
  await TodoModel.find({})
    .then((result) => res.send(result))
    .catch((err) => res.json(err));
});

app.get("/:id", async (req, res) => {
  await TodoModel.findOne({ _id: req.params.id })
    .then((result) => res.send(result))
    .catch((err) => res.json(err));
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await TodoModel.findByIdAndRemove(id).exec();
    res.send("deleted");
  } catch (err) {
    res.send(err);
  }
});

app.delete("/", async (req, res) => {
  try {
    await TodoModel.deleteMany({});
    res.send("deleted");
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;
