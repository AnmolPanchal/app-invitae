const express    = require('express');
const bodyParser = require('body-parser');
const router     = require('./routes.js');

// SETUP
const app = express();
if (process.env.NODE_ENV === 'production') 
  app.use(express.static(__dirname + '/../build'));
app.use(router);
app.listen(process.env.PORT || 3001);