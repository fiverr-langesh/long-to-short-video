const express = require("express");
const router = express.Router();

const { generateShortVideo } = require("../../controllers/generate.short.video.controller");
const { getOutput } = require("../../controllers/getOutput");

router.get("/:userId", getOutput);
router.post("/", generateShortVideo);

module.exports = { videoRouter: router };
