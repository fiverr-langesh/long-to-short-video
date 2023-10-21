const { Video } = require("../model/video.model");

async function getOutput(req, res) {
    try {
        const { userId } = req.params;
        
        const videos = await Video.find({ userId }).lean();

        if (videos.length === 0) {
            return res.status(404).json({ message: "Videos not found" });
        }

        // get output urls from videos
        const outputUrls = []

        videos.forEach(video => {
            if(video.outputUrls?.length > 0) {
                video.outputUrls.forEach(outputUrl => {
                    outputUrls.push(outputUrl)
                })
            }
        })

        return res.status(200).json({ message: "Videos found", outputUrls });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getOutput };