const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getCoursesByUser,
  createUser,
  updateUser,
  addCourses,
} = require("../controllers/users.controllers");

const router = Router();
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getCoursesByUser);

router.post("/users", createUser);
router.post("/users/:userId/courses", addCourses);
router.put("/users/:id", updateUser);

module.exports = router;
