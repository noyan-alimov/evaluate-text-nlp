const path = require('path');
const express = require('express');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// Aylien api request to evaluate text
app.get('/evaluate', async (req, res) => {
  try {
    const data = await textapi.sentiment({
      text: req.body.text,
      mode: req.body.mode
    });
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.log('Error with aylien api', err);
    res.status(404).json({ success: false, data: 'Error with aylien api' });
  }
});

app.listen(8081, () => {
  console.log('App listening on port 8081!');
});
