const http = require("http");
const Logger = require("logplease");
const logger = Logger.create("utils");
const numeros = require("./numeros");

http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

let numbers = [2, 3, 101, 201, 202, 100];
numbers.forEach((n) => {
  if (numeros.esPar(n) == true) {
    logger.debug(`El numero ${n} es par`);
  } else {
    logger.error(`El numero ${n} no es par`);
  }
});
