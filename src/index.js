const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const methodOverride = require('method-override');
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log("dirname : ", __dirname);
// console.log("PATH   : ", path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});