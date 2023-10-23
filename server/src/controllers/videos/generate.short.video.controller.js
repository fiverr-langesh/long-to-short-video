const { User } = require("../../model/user.model");
const { Video } = require("../../model/video.model");
const axios = require("axios");

async function generateShortVideo(req, res) {
  try {
    const { url, email } = req.body;

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userId = user._id;

    if (user.usedCredits >= user.credits || user.credits === 0) {
      await User.findByIdAndUpdate(userId, { usedCredits: 0 , credits: 0});
      return res.status(400).json({ message: "Insufficient credits" });
    }

    const video = await Video.create({ url, userId });

    const payload = {
      url,
      user_id: userId,
      video_id: video._id,
      balance_credits: user.credits - user.usedCredits,
    };
    
    console.log(payload);

    const aiReq = await axios.post("http://localhost:5000/ai",payload);

    const { data } = aiReq;

    console.log("aidata", data);

    if (data?.error) {
      return res.status(500).json({message: data.error})
    }

    let updatedVideo;

    if (aiReq.status === 200) {
      updatedVideo = await Video.findByIdAndUpdate(
        video._id,
        { outputUrls: data.output_urls, processingTime: data.time_taken},
        { new: true }
      );
    }

    // update credits
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $inc: { usedCredits: data.duration },
      },
      { new: true }
    );

    console.log(updatedUser);

    return res
      .status(201)
      .json({ message: "Video created", video: updatedVideo ,usedCredits: data.duration});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { generateShortVideo };
