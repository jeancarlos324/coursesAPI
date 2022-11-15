const Categories = require("./categories.model");
const Courses = require("./courses.model");
const UserCourses = require("./userCourses.model");
const Users = require("./users.model");
const Videos = require("./videos.model");

const initModels = () => {
  Users.hasMany(UserCourses, { as: "courses", foreignKey: "user_id" });
  UserCourses.belongsTo(Users, { as: "subscriber", foreignKey: "user_id" });

  Courses.hasMany(UserCourses, { as: "subscribers", foreignKey: "course_id" });
  UserCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });

  Courses.hasMany(Videos, { as: "video", foreignKey: "course_id" });
  Videos.belongsTo(Courses, { as: "course", foreignKey: "course_id" });

  Categories.hasMany(Courses, {
    as: "courses",
    foreignKey: "category_id",
  });
  Courses.belongsTo(Categories, {
    as: "category",
    foreignKey: "category_id",
  });
};

module.exports = initModels;
