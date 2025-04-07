const express = require('express');
const multer = require('multer');
const router = express.Router();
const { convertImage } = require('../controllers/conversionController');
const { getConversionHistory } = require('../controllers/historyController');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/convert', upload.single('image'), convertImage);
router.get('/history', getConversionHistory);

module.exports = router;
