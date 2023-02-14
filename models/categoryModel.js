const mongoose = require("mongoose");
const slugify = require("slugify");

const CategorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
      maxLength: [16, "Category must be 16 or less characters"],
    },
    endpoint: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

CategorySchema.pre("save", function (next) {
  const categorySlug = slugify(this.category, { lower: true });
  this.endpoint = categorySlug;

  next();
});

CategorySchema.virtual("images", {
  ref: "image",
  foreignField: "imageCategory",
  localField: "category",
});

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
