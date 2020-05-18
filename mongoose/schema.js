const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: String,
  banana: Number,
  apple: Number,
  orange: Number,
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
