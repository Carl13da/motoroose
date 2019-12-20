const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/motoroose', { useNewUrlParser: true });

requireDir('./models');

app.use('/api', require('./api/routes/routes'));

app.listen(3001, err => {
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }
  console.log(`
      ################################################
      🛡️  Server listening on port: 3001 🛡️
      ################################################
    `);
});
