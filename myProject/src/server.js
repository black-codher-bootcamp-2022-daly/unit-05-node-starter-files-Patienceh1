const express = require("express");

const app = express();

const tutorials = {  
    nodejs: 123,
    android: 87,
    java: 14,
    json: 7
  }
  
  
app.get("/", function(req, res) {
    // res.sendFile("../src/index.html", {root: __dirname})
    // console.log(__dirname);
    for (const key in tutorials) {  
        res.send(`${key}: ${tutorials[key]}`)
      }
    
});



app.listen(3000, function () {
  console.log("server is running on port 3000");
})