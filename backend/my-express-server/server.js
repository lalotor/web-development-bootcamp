const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello hello!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: test@test.com");
});

app.get("/about", function(req, res) {
  res.send("I enjoy learning new thing everyday");
});

app.get("/hobbies", function(req, res) {
  res.send("Videogames and soccer!");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
