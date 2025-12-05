const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("This is a login Page");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
