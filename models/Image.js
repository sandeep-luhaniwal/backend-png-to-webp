const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    originalName: String,
    convertedName: String,
    originalSize: Number,
    convertedSize: Number,
    conversionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);
