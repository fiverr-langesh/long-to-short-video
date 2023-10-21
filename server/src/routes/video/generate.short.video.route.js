const express = require("express");
const router = express.Router();

const {
  generateShortVideo,
} = require("../controllers/generate.short.video.controller");

router.post("/generate-short-video", generateShortVideo);

module.exports = { videoRouter: router };
