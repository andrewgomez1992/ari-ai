const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const Prompt = require("./schema/mongooseSchema");
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://qodebros:Spanish80000@ariaicluster.kifdnwa.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Allow requests only from this origin
  })
);

app.get("/test", (req, res) => {
  res.json({ message: "The shit work!" });
});

app.post("/prompt", async (req, res) => {
  try {
    const newItem = new Prompt({
      user: req.body.user,
      prompt: req.body.prompt,
      time: req.body.time,
      // result: req.body.result,
    });
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving item to database");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
