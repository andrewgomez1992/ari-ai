const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  user: String,
  prompt: String,
  time: String,
  // result: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
