var express = require("express");
var app = express();
var path = require('path');

app.use("/content", express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.listen(8081);

