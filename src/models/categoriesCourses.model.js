const { DataTypes } = require("sequelize");
const db = require("../utils/dababase");
const Categories = require("./categories.model");
const Courses = require("./courses.model");
const CategoriesCourses = db.define(
  "categories_courses",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Categories,
        key: "id",
      },
      allowNull: false,
      field: "category_id",
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
  { timestamps: false }
);

module.exports = CategoriesCourses;
