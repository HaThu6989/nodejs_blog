const newsRouter = require("./news.routes");
const coursesRouter = require("./courses.routes");
const siteRouter = require("./site.routes");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}

module.exports = route;
