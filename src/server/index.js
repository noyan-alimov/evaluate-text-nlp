const path = require('path');
const express = require('express');
const cors = require('cors');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

// Aylien api request to evaluate text
app.post('/evaluate', (req, res) => {
  try {
    textapi.sentiment(
      {
        url: req.body.url
      },
      function (error, response) {
        if (error === null) {
          console.log(response);
          res.status(200).json({ success: true, data: response });
        }
      }
    );
  } catch (err) {
    console.log('Error with aylien api', err);
    res.status(404).json({ success: false, data: 'Error with aylien api' });
  }
});

app.listen(8081, () => {
  console.log('App listening on port 8081!');
});
