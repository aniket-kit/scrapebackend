const express = require('express');
const router = express.Router();
const { scrapeNow, getData } = require('../controllers/scrapeController');

router.post('/api/scrape', scrapeNow); // 👈 changed from GET to POST
router.get('/api/data', getData);

module.exports = router;
