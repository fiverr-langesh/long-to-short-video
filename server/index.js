const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const connectDb = require("./utils/connectDb");

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
