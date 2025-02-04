const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/CRUD");

const express = require("express");
const router = express.Router();

router.get("/", fetchUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
