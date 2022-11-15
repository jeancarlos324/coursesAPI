const Videos = require("../models/videos.model");

class VideosServices {
  static async create(newVideo) {
    try {
      const query = Videos.create(newVideo);
      return query;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const query = Videos.destroy({ where: { id } });
      return query;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideosServices;
