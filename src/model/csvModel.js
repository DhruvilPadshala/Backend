const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const Csv = mongoose.model("Csv", csvSchema);

module.exports = Csv;
