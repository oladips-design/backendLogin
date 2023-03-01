const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  History: {
    type: String,
  },
  Amount: {
    type: Number,
  },
  DOAO: {
    type: Date,
  },
});

module.exports = mongoose.model("User", UserSchema);
