const { DataTypes } = require("sequelize");
const db = require("../utils/dababase");
const Categories = require("./categories.model");

const Courses = db.define("courses", {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instructor: {
    type: DataTypes.STRING,
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
});

module.exports = Courses;
