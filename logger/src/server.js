const express = require("express");
const logger = require("./logger");
const app = express();
const currentYear = new Date().getFullYear();
const send = (req, res, message) => {
  res.send(message);
  logger.write(`${new Date().toUTCString()} - ${req.method} "${message}\n"`);
};

app
  .get("/", (req, res) => {
    send(req, res, "Morning");
  })
  .patch("/", (req, res) => {
    send(req, res, "Morning");
  });

app.patch("/greet", (req, res) => {
  send(req, res, "Good Evening");
});

app.post("/bye", (req, res) => {
  send(req, res, "Good Night");
});

app.get("/date/:year-:month-:day", function (req, res, next) {
  if (req.params.year < currentYear) {
    send(req, res, "This year is in the past");
  } else if (req.params.year > currentYear) {
    send(req, res, "This year is in the future");
  }
});

app.listen(8080, function () {});
