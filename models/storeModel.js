const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Item must have a description"],
  },
  summary: {
    type: String,
    trim: true,
    required: false,
  },
  price: {
    type: Number,
    // Add a validator to make sure that only a number can be passed
    required: [true, "Item must have a price"],
  },
});

const Store = mongoose.model("store", StoreSchema);

module.exports = Store;
