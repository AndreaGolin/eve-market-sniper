const express = require('express');

const app = express.Router();
// const coscaller = require('../repositories/CosCaller');

app.get('/', (req, res) => {
  res.json({
      message: 'Behold The CIPPALIPPA!'
  });
});

// Test call, turn to ping
app.get('/test', (req, res) => {
  res.send("evesnip!");
});

module.exports = app;