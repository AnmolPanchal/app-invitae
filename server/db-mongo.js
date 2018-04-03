require('dotenv').config();

const MONGO = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;

let genes;
let db;

MONGO.connect(url, (err, client) => {
  if (err) {
    console.log('Unable to connect to Mongo');
    process.exit(1);
  } else {
    db = client.db('invitae');
    genes = db.collection('genes'); 
    console.log('Connected to MongoDB...');
  }
});

const findAll = cb => {
  genes
    .find({})
    .limit(1000)
    .toArray((err, docs) => {
      (err) ? console.log('Err: ', err) : cb(null, docs);
    });
}

const findOne = cb => {
  genes
    .find({ product_id : 272 })
    .toArray((err, docs) => {
      (err) ? console.log('Err: ', err) : cb(null, docs);
    });
}

module.exports = {
    findAll,
    findOne
}
