const Array = require("../../model/arrayModel");

// Create a new array
const postarray = async (req, res) => {
  try {
    const data = req.body;
    const insertedData = await Array.insertMany(data);

    res.status(201).json({
      message: "Data stored successfully",
      data: insertedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all arrays
const getarray = async (req, res) => {
  try {
    const arrays = await Array.find();
    res.json(arrays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Fetch a single array by ID
const getarrayById = async (req, res) => {
  try {
    const array = await Array.findById(req.params.id);
    if (!array) {
      return res.status(404).json({ error: "Array not found" });
    }
    res.json(array);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an array by ID

const updatearrayById = async (req, res) => {
  try {
    const updatedArray = await Array.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArray) {
      return res.status(404).json({ error: "Array not found" });
    }
    res.json(updatedArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an array by ID
const deletearrayById = async (req, res) => {
  try {
    const deletedArray = await Array.findByIdAndDelete(req.params.id);
    if (!deletedArray) {
      return res
        .status(404)
        .json({ error: "Array not found or already deleted" });
    }
    res.json({ message: "Array deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postarray,
  getarray,
  getarrayById,
  updatearrayById,
  deletearrayById,
};
