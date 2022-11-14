const { DataTypes } = require("sequelize");
const db = require("../utils/dababase");
const Courses = require("./courses.model");

const Videos = db.define("videos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

module.exports = Videos;
