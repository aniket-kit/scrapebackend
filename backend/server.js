const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const scrapeRoutes = require('./routes/scrapeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', scrapeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
