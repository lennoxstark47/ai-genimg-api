const express = require('express');
const {generateImage} = require('../controllers/openaiController')
const router = express.Router();

router.post('/genimg', generateImage)

module.exports = router;