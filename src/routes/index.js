const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
  fetchUserById,
} = require("../controller/CRUD");
const {
  fetchSchool,
  createSchool,
  updateSchool,
  deleteSchool,
  fetchSchoolById,
} = require("../controller/school");
const {
  fetchStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  fetchStudentById,
} = require("../controller/student");

const { login, signup } = require("../controller/auth");
const { createform } = require("../controller/form");
const {
  postarray,
  getarray,
  getarrayById,
  updatearrayById,
  deletearrayById,
} = require("../controller/array");

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

// school routes

router.get("/school", fetchSchool);
router.post("/school", createSchool);
router.put("/school/:id", updateSchool);
router.delete("/school/:id", deleteSchool);
router.get("/school/:id", fetchSchoolById);

// student routes

router.get("/student", fetchStudent);
router.post("/student", createStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);
router.get("/student/:id", fetchStudentById);

// array routes

router.post("/array", postarray);
router.get("/array", getarray);
router.get("/array/:id", getarrayById);
router.put("/array/:id", updatearrayById);
router.delete("/array/:id", deletearrayById);

module.exports = router;
