const CategoriesServices = require("../services/categories.services");

const createCategory = async (request, response, next) => {
  try {
    const newVideo = request.body;
    const result = await CategoriesServices.create(newVideo);
    console.log(result);
    response.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot create category",
    });
  }
};

const deleteCategory = async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await CategoriesServices.delete(id);
    response.status(204).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot delete category",
    });
  }
};
module.exports = { createCategory, deleteCategory };
