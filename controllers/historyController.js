const Image = require('../models/Image');

const getConversionHistory = async (req, res) => {
    try {
        const images = await Image.find().sort({ conversionDate: -1 });
        res.json(images);
    } catch (error) {
        console.error('History fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch conversion history' });
    }
};

module.exports = { getConversionHistory };
