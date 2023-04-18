const mongoose = require('mongoose');
const db = mongoose.connection
const config = require('./config');


mongoose.connect(config.databaseUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.once('open', () => {
  console.log('Successfully connected to MongoDB using Mongoose!'.green)
});
db.on('error', () => {
  console.log('MongoDB Connection Error'.red)
});
module.exports = db;
