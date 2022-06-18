const fs = require("fs");

console.log(__dirname);
console.log(__filename);

// 1. reading file
// fs.readFile("./docs/blog.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// 2. writing file
// fs.writeFile("./docs/blog1.txt", "king kohli", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("write file successfully");
// });

// 3. directory
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("directory created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// 4. deleting files
// if (fs.existsSync("./docs/blog1.txt")) {
//   fs.unlink("./docs/blog1.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log("file deleted");
// }
