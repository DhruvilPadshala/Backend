const School = require("../../model/schoolModel");

const fetchSchool = async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createSchool = async (req, res) => {
  try {
    const { schoolname, email, address } = req.body;
    const school = new School({ schoolname, email, address });
    await school.save();
    res.status(201).json({ message: "School created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const { schoolname, email, address } = req.body;
    const school = await School.findByIdAndUpdate(
      id,
      { schoolname, email, address },
      { new: true }
    );
    if (!school) {
      return res.status(404).json({ error: "School not found" });
    }
    res
      .status(200)
      .json({ data: school, message: "School updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findByIdAndDelete(id);
    if (!school) {
      return res.status(404).json({ error: "School not found" });
    }
    res.status(200).json({ message: "School deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetchSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const school = await School.findById(id);
    if (!school) {
      return res.status(404).json({ error: "School not found" });
    }
    res.json(school);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  fetchSchool,
  createSchool,
  updateSchool,
  deleteSchool,
  fetchSchoolById,
};
