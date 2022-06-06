const Course = require("../models/Course.model");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        // res.render("home", { courses });
        res.render("home", { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  //[GET]/search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
