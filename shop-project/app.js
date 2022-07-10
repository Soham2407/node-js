const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(shopRoutes);
app.use("/admin", adminRoutes);

// 404 page
app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page not found</h1>");
});

app.listen(3000);
