const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./pages/";

  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      path = path + "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path = path + "about.html";
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;

    default:
      path = path + "404.html";
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
