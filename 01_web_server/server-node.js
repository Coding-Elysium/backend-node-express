const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Hello World");
  } else if (req.url === "/id") {
    res.statusCode = 200;
    res.end("Hello Worlds");
  } else {
    res.statusCode = 404;
    res.end("404 not found");
  }
});

server.listen(port, hostname, () => {
  console.log("Listening");
});
