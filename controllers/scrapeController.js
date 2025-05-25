const axios = require('axios');
const cheerio = require('cheerio');
const Data = require('../models/Data');

const scrapeNow = async (req, res) => {
  try {
    const { url } = req.body; // 👈 Accept URL from frontend

    if (!url) return res.status(400).json({ error: 'URL is required' });

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    await Data.deleteMany();

    // Customize scraping logic as per the input site's structure
    $('a').each(async (_, el) => {
      const title = $(el).text();
      const link = $(el).attr('href');
      if (title && link) {
        await Data.create({ title, url: link });
      }
    });

    res.json({ message: 'Scrape complete' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getData = async (req, res) => {
  const data = await Data.find().limit(100);
  res.json(data);
};

module.exports = { scrapeNow, getData };
