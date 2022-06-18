const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readableStream = fs.createReadStream("demo.txt");
  // readableStream.on("data", (chunk) => {
  //   res.write(chunk);
  // });

  // readableStream.on("end", () => {
  //   res.end();
  // });

  // readableStream.on("error", (err) => {
  //   console.log(err);
  //   res.end("File Not Found");
  // });

  // Pipe
  readableStream.pipe(res);
});

server.listen(3000);
