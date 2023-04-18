const mongoose = require('mongoose')
const { Schema } = mongoose;

// You can also modify this for your requirements 
const Users = new Schema({
  discordId: { type: String, required: true },
  username: { type: String, required: true },
  discriminator: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  accessToken: { type: String },
  refreshToken: { type: String },
  date: { type: Date, default: Date.now }
});
const User = mongoose.model("User", Users)
module.exports = User;
