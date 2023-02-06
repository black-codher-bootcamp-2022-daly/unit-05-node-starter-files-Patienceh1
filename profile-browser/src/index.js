
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const profiles = require('./models/profiles.json');

const port = 8080;
const notFoundStatus = 404;
const errorStatus = 500;

//Middleware processing
app.use("/assets", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());


//GET /
app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

//GET /api/profiles

app.get('/api/profiles', (req, res) => {
     res.sendFile("./models/profiles.json", { root: __dirname });
    // const profiles = JSON.parse(fs.readFileSync(file));
    const id = Number.parseInt(req.params.id);
    // // res.status(errorStatus).send('Not implemented');
    // // log(req.method)
    // console.log(__dirname);
});



//GET /api/profiles/:id
app.get('/api/profiles/:id', (req, res) => {
    console.log('Api:', res.locals)
    const file = "./src/models/profiles.json";
    const id = req.params.id;
    const profiles = JSON.parse(fs.readFileSync(file));
    // res.status(errorStatus).send('Not implemented');
});

//POST /api/profiles
app.post('/api/profiles', (req, res) => {
    res.status(errorStatus).send('Not implemented');
});

//PUT /api/profiles
app.put('/api/profiles/:id', (req, res) => {
    res.status(errorStatus).send('Not implemented');
});

//PATCH /api/profiles
app.patch('/api/profiles:id', (req, res) => {
    res.status(errorStatus).send('Not implemented');
});

//DELETE /api/profiles/:id
app.delete('/api/profiles/:id', (req, res) => {
    res.status(errorStatus).send('Not implemented');
});

app.listen(port, function () {
    console.log(`Node server is running... http://localhost:${port}`);
});

module.exports = app;