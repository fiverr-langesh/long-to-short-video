const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    url: String,
    userId: String,
    outputUrls: [String],
    processingTime: Number
}, {
    timestamps: true,
    collection: 'videos'
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = {Video};