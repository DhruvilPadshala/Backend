const Test = require("../../model/testModel");

// Create a new user
const createUser = (req, res) => {
  try {
    let users = req.body;
    const newusers = new Test(users);
    newusers.save();
    res.status(200).json({ data: users, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

// Fetch all users
const fetchUsers = async (req, res) => {
  try {
    const users = await Test.find({});
    res
      .status(200)
      .json({ data: users, message: "Users fetched successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a user by ID
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = req.body;
    const user = await Test.findByIdAndUpdate(id, updatedUser, { new: true });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ data: user, message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Test.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res
      .status(200)
      .json({ data: deletedUser, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// users by ID
const fetchUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Test.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res
      .status(200)
      .json({ data: user, message: "User by ID fetched successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createUser,
  fetchUsers,
  updateUser,
  deleteUser,
  fetchUserById,
};
