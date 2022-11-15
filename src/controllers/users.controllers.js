const UserServices = require("../services/users.services");

const getAllUsers = async (request, response, next) => {
  try {
    const result = await UserServices.getAll();
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 404,
      errorContent: error,
      message: "Users Not found",
    });
  }
};

const getUserById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await UserServices.getById(id);
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 404,
      errorContent: error,
      message: "User Not found",
    });
  }
};

const getCoursesByUser = async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await UserServices.getCourses(id);
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 404,
      errorContent: error,
      message: "Courses Not found",
    });
  }
};

const createUser = async (request, response, next) => {
  try {
    const newUser = request.body;
    const result = await UserServices.create(newUser);
    response.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot create user",
    });
  }
};

const updateUser = async (request, response, next) => {
  try {
    const { id } = request.params;
    const userUpdate = request.body;
    const result = await UserServices.update(userUpdate, id);
    response.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot update user",
    });
  }
};

const addCourses = async (request, response, next) => {
  try {
    const { userId } = request.params;
    const { courseId } = request.body;
    const result = await UserServices.addCourse(userId, courseId);
    response.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot add course",
    });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  getCoursesByUser,
  createUser,
  updateUser,
  addCourses,
};
