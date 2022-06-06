const path = require("path");
const express = require("express");
const morgan = require("morgan");
// const methodOverride = require('method-override');
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes/index.routes");

app.use(express.static(path.join(__dirname, "public")));

//Middleware urlencoded để có thể xử lý dữ liệu từ client lên server qua form sublit html
app.use(express.urlencoded({ extended: true }));
//Middleware json để có thể xử lý dữ liệu từ code JVS qua thư viện code js đẻ submit: XMLHttp, fetch, axios, ...
app.use(express.json());

//HTTP logger
// app.use(morgan("combined"));

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

//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
