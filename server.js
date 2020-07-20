const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./config/Config');
const routes = require('./routes/Routes');
 
const app = express();

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.use('/evesnip', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

module.exports = app;