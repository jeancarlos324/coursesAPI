const Courses = require("../models/courses.model");
const UserCourses = require("../models/userCourses.model");
const Users = require("../models/users.model");

class UserServices {
  static async getAll() {
    try {
      const query = await Users.findAll({
        attributes: ["id", "lastName", "firstName", "email"],
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const query = await Users.findByPk(id, {
        attributes: ["id", "lastName", "firstName", "email"],
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async getCourses(id) {
    try {
      const query = await Users.findAll({
        where: { id },
        attributes: ["id", "lastName", "firstName", "email"],
        include: {
          model: UserCourses,
          as: "courses",
          attributes: ["courseId"],
          include: {
            model: Courses,
            as: "course",
            attributes: ["id", "title", "description", "instructor"],
          },
        },
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async create(newUser) {
    try {
      const query = await Users.create(newUser);
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateData, id) {
    try {
      const { firstName, lastName, password } = updateData;
      const query = await Users.update(
        // updateData,
        { firstName, lastName, password },
        { where: { id } }
      );
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async addCourse(userId, courseId) {
    try {
      const query = await UserCourses.create({ userId, courseId });
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
