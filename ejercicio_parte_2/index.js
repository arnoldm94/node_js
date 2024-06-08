const { log } = require("console");
const http = require("http");
const fs = require("fs");
const url = require("url");
const address = "http://localhost:8080/pages";
const query = url.parse(address, true);
const queryData = query.query;

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    const filename = `./pages/${query.pathname}`;

    fs.readFile(`./${filename}`, (err, data) => {
      if (err) {
        fs.readFile("./pages/notFound.html", (err, data) => {
          if (err) {
            console.error(err);
            res.writeHead(500, { "Content-Type": "text/html" });
            return res.end("Error reading notFound.html");
          }
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end(data);
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        if (data) res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080);

log("todo bien");
