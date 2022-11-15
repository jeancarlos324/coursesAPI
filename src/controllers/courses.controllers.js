const CoursesServices = require("../services/courses.services");

const getAllCourses = async (request, response, next) => {
  try {
    const result = await CoursesServices.getAll();
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 404,
      errorContent: error,
      message: "Courses Not found",
    });
  }
};

const getCoursesById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await CoursesServices.getById(id);
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 404,
      errorContent: error,
      message: "Course Not found",
    });
  }
};

const createCourses = async (request, response, next) => {
  try {
    const { course, videos } = request.body;
    const result = await CoursesServices.create(course, videos);
    response.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot create course",
    });
  }
};

const updateCourses = async (request, response, next) => {
  try {
    const { id } = request.params;
    const newCourse = request.body;
    const result = await CoursesServices.update(newCourse, id);
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot updated course",
    });
  }
};

module.exports = {
  getAllCourses,
  createCourses,
  updateCourses,
  getCoursesById,
};
