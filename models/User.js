const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  coinsFlipped: { type: Number, default: 0 },
  flipsWon: { type: Number, default: 0 },
  flipsLost: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema, "users");
