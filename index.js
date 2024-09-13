const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hellow");
});

app.get("/about", (req, res) => {
  res.status(200).send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send([
    {
      name: "ram",
      field: "Agrii",
    },
  ]);
});
app.listen(8000, () => {
  console.log("listening port no. 8000");
});
