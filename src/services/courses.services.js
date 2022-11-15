const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CoursesServices {
  static async getAll() {
    try {
      const query = await Courses.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "categoryId", "category_id"],
        },
        include: [
          {
            model: Categories,
            as: "category",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "video",
            attributes: ["url"],
          },
        ],
      });
      return query;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const query = await Courses.findByPk(id, {
        attributes: ["id", "title", "description", "instructor"],
        include: [
          {
            model: Categories,
            as: "category",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "video",
            attributes: ["url"],
          },
        ],
      });
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async create(course, videos) {
    try {
      const courseResult = await Courses.create(course);
      const { id } = courseResult;
      videos.forEach(async (video) => {
        const { title, url } = video;
        return await Videos.create({
          title: title,
          url: url,
          courseId: id,
        });
      });
      return courseResult;
    } catch (error) {
      throw error;
    }
  }

  static async update(updateData, id) {
    try {
      const { description } = updateData;
      const query = await Courses.update({ description }, { where: { id } });
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
