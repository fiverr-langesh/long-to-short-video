const { Video } = require("../../model/video.model");

async function deleteOutput(req, res) {
  try {
    const { outputUrl,videoId } = req.body;

    const video = await Video.findById(videoId).lean();

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const updatedOp = video.outputUrls.filter((url) => url !== outputUrl);


    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { outputUrls: updatedOp },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Output deleted", video: updatedVideo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { deleteOutput };