const { Router } = require("express");
const {
  createVideos,
  deleteVideo,
} = require("../controllers/videos.controllers");

const router = Router();

router.post("/videos", createVideos);
router.delete("/videos/:id", deleteVideo);

module.exports = router;
