const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchUserById,
} = require("../controller/CRUD");
const { login, signup } = require("../controller/auth");
const { createform } = require("../controller/form");

const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// users routes

router.get("/", fetchUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", fetchUserById);

// auth routes

router.post("/login", login);
router.post("/signup", signup);

// form routes

router.post("/form", upload.single("image"), createform);

module.exports = router;
