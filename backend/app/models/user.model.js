const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: String,
    choice: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, 
  {
    timestamps: true
    })
);

module.exports = User;