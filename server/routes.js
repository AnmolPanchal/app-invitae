const express    = require('express');
const bodyParser = require('body-parser');
//const format     = require('../parser/parse.js');
const mongo      = require('./db-mongo.js');

const router = express.Router();

/* =============
== MIDDLEWARE ==
============= */
router.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(`${req.path}, ${req.method}, ${req.status}, ${JSON.stringify(req.body)}`); 
    next(); 
});
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* =====================
===== MONGO ROUTES =====
===================== */
router.get('/all', (req, res) => {
    var start = new Date();

    mongo.findAll((err, result) => {
        var elapsed = new Date() - start;
        console.log(elapsed + ' ms');
        return res.status(200).json(result);
    });
});

router.get('/mongo/one', (req, res) => {
    var start = new Date();

    mongo.findOne((err, result) => {
        var elapsed = new Date() - start;
        console.log(elapsed + ' ms');
        return res.status(200).json(result);
    });
});

router.get('/test', (req, res) => {
  console.log(`inside here to test!`);
});

module.exports = router;

