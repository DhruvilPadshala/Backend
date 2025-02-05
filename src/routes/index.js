const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchUserById,
} = require("../controller/CRUD");
const { login, signup } = require("../controller/auth");

const express = require("express");
const router = express.Router();

// users routes

router.get("/", fetchUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", fetchUserById);

// auth routes

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;
