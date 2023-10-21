const express = require("express");
const router = express.Router();

const { generateShortVideo } = require("../../controllers/videos/generate.short.video.controller");
const { getOutput } = require("../../controllers/videos/getOutput");
const { deleteOutput } = require("../../controllers/videos/deleteOutput");

router.get("/:userId", getOutput);
router.post("/", generateShortVideo);
router.post("/delete", deleteOutput)

module.exports = { videoRouter: router };
