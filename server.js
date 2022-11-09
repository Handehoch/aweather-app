const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(__dirname + "/dist/aweather-app"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/aweather-app/index.html"));
});

app.listen(process.env.PORT || 5050, () => {
  console.log(`Server is up on port: ${process.env.PORT || 5050}`);
});
