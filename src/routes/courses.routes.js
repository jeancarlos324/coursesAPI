const { Router } = require("express");

const {
  getAllCourses,
  createCourses,
  updateCourses,
  getCoursesById,
} = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", getAllCourses);
router.get("/courses/:id", getCoursesById);
router.post("/courses", createCourses);
router.put("/courses/:id", updateCourses);

module.exports = router;
