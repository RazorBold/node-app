const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node CI/CD is working 🚀 Syaiful");
});

app.listen(5028, () => {
  console.log("Server running on port 5028 Syaiful");
});
