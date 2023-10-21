const { User } = require("../model/user.model");
const { Video } = require("../model/video.model");
const axios = require("axios");

async function generateShortVideo(req, res) {
  try {
    const { url, email } = req.body;

      const user = await User.findOne({email}).lean();
      
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userId = user._id;

      const video = await Video.create({ url, userId });
      
      const aiReq = await axios.post('http://localhost:5000/ai', { url, user_id: userId });
      
      const { data } = aiReq;
      
      console.log(data)

    return res.status(201).json({ message: "Video created" ,video});
  } catch (error) {
      console.log(error)
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { generateShortVideo };
