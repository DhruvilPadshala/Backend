const mongoose = require("mongoose");

const gender = ["male", "female"];

const arraySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: gender,
  },
});
const Array = mongoose.model("Array", arraySchema);

module.exports = Array;
