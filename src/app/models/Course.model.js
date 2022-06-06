const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  name: {
    type: String,
    maxlength: 255,
  },
  description: {
    type: String,
    maxlength: 600,
  },
  image: {
    type: String,
    maxlength: 255,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

//mongoose.model('ModelName', mySchema);
//Sang MongoDB Course sẽ đc tự động viết thường và số nhiều Course => courses
module.exports = mongoose.model("Course", courseSchema);
