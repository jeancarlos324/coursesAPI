const { DataTypes } = require("sequelize");
const db = require("../utils/dababase");
const Courses = require("./courses.model");
const Users = require("./users.model");

const UserCourses = db.define(
  "user_courses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
      allowNull: false,
      field: "user_id",
    },

    courseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Courses,
        key: "id",
      },
      allowNull: false,
      field: "course_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UserCourses;
