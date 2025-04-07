const sharp = require('sharp');
const Image = require('../models/Image');
const path = require('path');

const convertImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const webBuffer = await sharp(req.file.buffer)
            .webp({ quality: 80 })
            .toBuffer();

        const newImage = new Image({
            originalName: req.file.originalname, // ✅ Fixed typo
            convertedName: `${path.parse(req.file.originalname).name}.webp`,
            originalSize: req.file.size,
            convertedSize: webBuffer.length,
        });

        await newImage.save();

        res.set('Content-Type', 'image/webp');
        res.send(webBuffer); // ✅ Fixed incorrect variable name
    } catch (error) {
        console.error('Conversion error:', error);
        res.status(500).json({ error: 'Image conversion failed' });
    }
};

module.exports = { convertImage };
