const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const key = require('./config/key');
const mongoose = require('mongoose');
const Profile = require('./mongoose/schema');

mongoose.connect(key.mongoURI);
const app = express();
app.use(bodyParser.json());

app.post('/apipost', async (req, res) => {
  console.log(req.body);
  const user = req.body;
  const profile = new Profile(user);
  await profile.save();
  console.log(typeof req.body);
  res.send(profile);
});
app.post('/apifind', async (req, res) => {
  console.log(req.body);
  const find = req.body;
  const findprofile = await Profile.findOne(find);
  console.log(findprofile);
  res.json(findprofile);
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('myweb/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/myweb/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
