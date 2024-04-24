const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_DB_SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.get("/items", (req, res) => {
  res.json({ message: "Get all items" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
