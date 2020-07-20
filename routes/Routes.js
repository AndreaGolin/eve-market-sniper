const express = require('express');

const app = express.Router();
const regionRepo = require('../repositories/RegionRepository');

app.get('/', (req, res) => {
  res.json({
      message: 'Behold The CIPPALIPPA!'
  });
});

// Test call, turn to ping
app.get('/test', (req, res) => {
  res.send("evesnip!");
});

// get all todo items in the db
app.get('/regions', (req, res) => {
  regionRepo.findAll().then((regions) => {
    res.json(regions);
  }).catch((error) => console.log(error));
});

app.post('/regions', (req, res) => {
  const { name } = req.body.name;
  const { regionId } = req.body.regionId;
  regionRepo.create(req.body.name, req.body.regionId).then((region) => {
    res.json(region);
  }).catch((error) => console.log(error));
});



module.exports = app;