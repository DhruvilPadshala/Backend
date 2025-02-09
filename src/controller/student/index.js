const Student = require("../../model/studentModel");
const School = require("../../model/schoolModel");

const fetchStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createStudent = async (req, res) => {
  try {
    const { studentname, email, phone, address, schoolref } = req.body;
    const school = await School.findById(schoolref);
    if (!school) {
      return res.status(404).json({ error: "School not found" });
    }
    const student = new Student({
      studentname,
      email,
      phone,
      address,
      schoolref,
    });
    await student.save();

    const populatedStudent = await Student.findById(student._id).populate(
      "schoolref"
    );
    res.status(201).json({
      student: populatedStudent,
      message: "Student created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentname, email, phone, address, schoolref } = req.body;
    const student = await Student.findByIdAndUpdate(
      id,
      { studentname, email, phone, address, schoolref },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res
      .status(200)
      .json({ data: student, message: "Student updated successfully" });
    // res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  fetchStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  fetchStudentById,
};
