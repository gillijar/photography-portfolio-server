const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  imageCategory: {
    type: [String],
    ref: "imageCategory",
  },
});

const Image = mongoose.model("image", ImageSchema);

module.exports = Image;
