const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/semesterController');

router.post('/', semesterController.handleGetSem);

module.exports = router;