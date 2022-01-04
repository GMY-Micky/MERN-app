const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

autoIncrement.initialize(mongoose.connection);
todoSchema.plugin(autoIncrement.plugin, "todo");

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
