const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const initModels = require("../models/initModels");
const UserCourses = require("../models/userCourses.model");
const Users = require("../models/users.model");
const Videos = require("../models/videos.model");
const db = require("../utils/dababase");

initModels();

const users = [
  {
    firstName: "Ian ",
    lastName: "Rosas",
    email: "ian@gmail.com",
    password: "1234",
  },
  {
    firstName: "Alvis ",
    lastName: "Echeverria",
    email: "alvis@gmail.com",
    password: "1234",
  },
  {
    firstName: "Carlos ",
    lastName: "Tineo",
    email: "carlos@gmail.com",
    password: "1234",
  },
];

const categories = [
  { name: "programacion" },
  { name: "matematicas" },
  { name: "cocina" },
  { name: "arte" },
  { name: "hogar" },
];

const courses = [
  {
    title: "desarrollo web ",
    description: "many description",
    instructor: "Jose Perez",
    categoryId: 1,
  },
  {
    title: "cocina",
    description: "many description",
    instructor: "Juan Rodrigo",
    categoryId: 2,
  },
  {
    title: "escrima y ferosidad",
    description: "many description",
    instructor: "Ana Martinez",
    categoryId: 3,
  },
];

const videos = [
  {
    title: "Programacion web con Jose",
    url: "https://www.youtube.com/watch?v=kcgLOQG_uvk",
    courseId: "1",
  },
  {
    title: "Mejores recetas de cocina",
    url: "https://www.youtube.com/watch?v=kcgLOQG_uvk",
    courseId: "2",
  },
  {
    title: "Como desembolverte a gran escala",
    url: "https://www.youtube.com/watch?v=_CL6n0FJZpk",
    courseId: "3",
  },
];

const userCourses = [
  { userId: 1, courseId: 1 },
  { userId: 1, courseId: 2 },
  { userId: 2, courseId: 3 },
  { userId: 3, courseId: 3 },
  { userId: 3, courseId: 1 },
];

db.sync({ force: true }).then(async () => {
  console.log("Started Seed");
  users.forEach((user) => Users.create(user));

  setTimeout(() => {
    categories.forEach((category) => Categories.create(category));
  }, 100);
  setTimeout(() => {
    courses.forEach((course) => Courses.create(course));
  }, 200);
  setTimeout(() => {
    videos.forEach((video) => Videos.create(video));
  }, 300);
  setTimeout(() => {
    userCourses.forEach((uc) => UserCourses.create(uc));
  }, 400);
});
