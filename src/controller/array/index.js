const Array = require("../../model/arrayModel");

// Create a new array
const postArray = async (req, res) => {
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
const getArray = async (req, res) => {
  try {
    let { page, pageSize, search, gender } = req.query;
    page = parseInt(page) || 1;
    pageSize = parseInt(pageSize) || 10;
    const skip = (page - 1) * pageSize;
    let query = {};
    if (search) {
      query = {
        $or: [{ name: { $regex: search, $options: "i" } }],
      };
    }
    if (gender && ["male", "female"].includes(gender.toLowerCase())) {
      query.gender = gender.toLowerCase();
    }
    const searchQuery = await Array.find(query).skip(skip).limit(pageSize);
    const totalCount = await Array.countDocuments(query);
    const pageData = searchQuery.length;
    res.status(200).json({
      data: searchQuery,
      message: "Data fetched successfully",
      totalCount: totalCount,
      pagedata: pageData,
      PageSize: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch a single array by ID
const getArrayById = async (req, res) => {
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

const updateArrayById = async (req, res) => {
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
const deleteArrayById = async (req, res) => {
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
  postArray,
  getArray,
  getArrayById,
  updateArrayById,
  deleteArrayById,
};
