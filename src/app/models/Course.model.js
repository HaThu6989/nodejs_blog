const mongoose = require("mongoose");

//Loading
const slug = require("mongoose-slug-generator");

//Initialization
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

//mongoose.model('ModelName', mySchema);
//Sang MongoDB Course sẽ đc tự động viết thường và số nhiều Course => courses
module.exports = mongoose.model("Course", courseSchema);
