// const express = require("express");
// app = express();

// app.get("/", function (req, res) {
//   res.send("First express server");
// });

// app.listen(5050, function () {
//   console.log("Server is runnig");
// });

const express = require("express");
app = express();

app.get("/", function (req, res) {
  res.send("heloo. Express");
});
app.get("/contact", function (req, res) {
  res.send("heloo. Contact");
});

const port = 5000;

app.listen(port, function () {
  console.log(`Server running on port ${port} 🔥`);
});
