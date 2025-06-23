const mongoose = require("mongoose");
const { type } = require("../schema");
const { Schema } = mongoose;
const { model } = mongoose;

const reviewSchema = new mongoose.Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//create model and export
module.exports = mongoose.model("Review", reviewSchema);
