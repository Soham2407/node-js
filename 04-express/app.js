const express = require("express");

// Instance of express
const app = express();

// register view engine
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  // res.sendFile("./pages/index.html", { root: __dirname });
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.sendFile("./pages/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create-Blog" });
});

// redirect
// app.get("/about-us", (req, res) => {
//   // res.redirect("/about");
// });

// middleware -> 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./pages/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

// listen for request
app.listen(3000);
