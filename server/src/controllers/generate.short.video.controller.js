const { Video } = require("../model/video.model");

async function generateShortVideo(req, res) {
  try {
    const { url, userId } = req.body;

    const video = await Video.create({ url, userId });

    return res.status(201).json({ video });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { generateShortVideo };
