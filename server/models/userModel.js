const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: String,
  date: String,
  phone: String,
  city: String,
  impo: String,
  comments: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
