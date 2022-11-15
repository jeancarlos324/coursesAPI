const Categories = require("../models/categories.model");

class CategoriesServices {
  static async create(newCategory) {
    try {
      const query = Categories.create(newCategory);
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const query = Categories.destroy({ where: { id } });
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;
