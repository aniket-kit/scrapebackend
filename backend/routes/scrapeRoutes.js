const express = require('express');
const router = express.Router();
const { scrapeNow, getData } = require('../controllers/scrapeController');

router.post('/scrape', scrapeNow); // 👈 changed from GET to POST
router.get('/data', getData);

module.exports = router;
