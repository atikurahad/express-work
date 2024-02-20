const express = require("express");
app = express();

app.get("/", (req, res) => {
  res.end("I am from home");
});
app.get("/contact", (req, res) => {
  res.end("I am from contact");
});
app.post("/user", (req, res) => {
  res.end("I am from User");
});
app.delete("/remove", (req, res) => {
  res.end("I am from User");
});
app.get("/cookie", (req, res) => {
  res.cookie("name", "Ahad");
  res.cookie("age", "24");
  res.cookie("sex", "Male");
  res.cookie("height", "172cm");
  res.cookie("designation", "student");

  res.end("Cookie set success");
});
app.get("/cookieRemove", (req, res) => {
  res.clearCookie("name", "Ahad");
  res.clearCookie("age", "24");

  res.end("Cookie remove success");
});

app.get("/person", (req, res) => {
  res.append("name", "master");
  res.append("city", "dhaka");
  res.append("profesion", "teacher");

  res.send(201).end("Success");
});

const port = 5000;

app.listen(port, function () {
  console.log(`Server running on port ${port} 🔥`);
});
