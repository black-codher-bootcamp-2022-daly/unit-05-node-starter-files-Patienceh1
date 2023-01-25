var http = require("http"),
  fs = require("fs");

var server = http
  .createServer(function (req, response) {
    if (
      (req.method === "GET" && (req.url.endsWith("index.html")) ||
      req.url.endsWith("/"))
    ) {
      fs.readFile("./index.html", function (err, html) {
        if (err) {
          throw err;
        }
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
      });
    }else {
        response.writeHeader(404);
        response.end("404 Not Found");
    }

  })
  .listen(8080);
