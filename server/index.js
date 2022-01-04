const express = require("express");
const mongooes = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const TodoModel = require("./models/TodoSchema");
const Todo = require("./routes/todo");

app.use(cors());

const PORT = 3001;

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

mongooes.connect(
  "mongodb+srv://GMY-Micky:mustafa123@firstone.ohxlh.mongodb.net/todo?retryWrites=true&w=majority",
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/", async (req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const body = req.body.body;

  const todo = new TodoModel({ title: title, body: body, image: image });
  try {
    await todo.save();
    res.send("added to database");
  } catch (err) {
    res.json(err);
  }
});

app.put("/", async (req, res) => {
  const newTitle = req.body.title;
  const newBody = req.body.body;
  const newImage = req.body.image;
  const id = req.body.id;

  await TodoModel.findByIdAndUpdate(id, {
    title: newTitle,
    body: newBody,
    image: newImage,
  })
    .then((response) => res.send(response))
    .catch((err) => res.json(err));
});

app.use("/todo", Todo);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
