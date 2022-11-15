const VideosServices = require("../services/videos.services");

const createVideos = async (request, response, next) => {
  try {
    const newVideo = request.body;
    const result = await VideosServices.create(newVideo);
    console.log(result);
    response.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot create video",
    });
  }
};

const deleteVideo = async (request, response, next) => {
  try {
    const { id } = request.params;
    const result = await VideosServices.delete(id);
    response.status(204).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, cannot delete video",
    });
  }
};
module.exports = { createVideos, deleteVideo };
