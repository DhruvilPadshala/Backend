const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
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
const Auth = mongoose.model("Auth", authSchema);

module.exports = Auth;
