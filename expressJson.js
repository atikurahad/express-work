const express = require("express");
const bodyParser = require("body-parser");
app = express();

app.use(bodyParser.json());

app.post("/", function (req, res) {
  let JSONData = req.body;
  let name = JSONData["name"];
  let city = JSONData["city"];
  res.send(name + "  " + city);
});

const port = 5000;

app.listen(port, function () {
  console.log(`Server running `);
});
