const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
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
    unique: true,
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
