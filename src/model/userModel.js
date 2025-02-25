const mongoose = require("mongoose");
const generateCode = require("../utils/codeGenerate");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
