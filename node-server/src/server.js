const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Morning");
  return res.end();
});

/*
Add a route to the server.js file with code that will return the contents 
of the JSON file profiles.json when a user visits the following URL:
GET http://localhost:8080/profile
Replace ... with the correct path
*/
app.get("/profiles", (req, res) => {
  fs.readFile("../src/models/profiles.json", function (err, json) {
    if (err) {
      throw err;
    }

    // The slide referenced res.writeHead(), but I'm replacing that problematic call with
    // modern Express method chaining to make the logic more readable.
    // We set the Content-Type header and the status code, send the body and finally end the response.
    res.set("Content-Type", "application/json").status(200).send(json).end();
  });
});

/*
  Add a route that returns a list of the profile names and bio 
  from the server as HTML elements on the endpoint below:
  GET http://localhost:8080/profiles/view 
  Replace ... with the correct path
  */
app.get("/profiles/view", (req, res) => {
  fs.readFile("./models/profiles.json", function (err, json) {
    if (err) {
      throw err;
    }

    res
      .set("Content-Type", "text/html")
      .status(200)
      .send(
        // When we call fs.readFile(), we get a string that we convert into a JSON object
        // (an array, in this case) using JSON.parse(). We then call the reduce() array method
        // to convert the array into a single string which we send back to the client and use string
        // interpolation to append the markup generated for each element.
        JSON.parse(json).reduce(
          (previous, current) =>
            `${previous}<h2>${current.firstname} ${current.lastname}</h2>\n<p>${current.bio}</p>\n`,
          "<h1>Profiles</h1>\n"
        )
      )
      .end();
  });
});

app.listen(port, () => {
  console.info(`Example app listening at http://localhost:${port}`);
});