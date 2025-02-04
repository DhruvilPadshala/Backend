const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchUserById,
} = require("../controller/CRUD");

const express = require("express");
const router = express.Router();

// users routes

router.get("/", fetchUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", fetchUserById);

module.exports = router;
