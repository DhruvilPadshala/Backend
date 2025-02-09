const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  schoolref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
