const express    = require('express');
const bodyParser = require('body-parser');
const router     = require('./routes.js');

// SETUP
const app = express();
console.log(`process.env.NODE_ENV: `, process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  console.log(`i am here`);
  console.log(__dirname + '/../build');
  app.use(express.static(__dirname + '/../build'));
}
app.use(router);
app.listen(process.env.PORT || 3001);
