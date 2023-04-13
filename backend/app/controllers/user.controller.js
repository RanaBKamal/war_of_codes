const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.getAllUsers = (req, res) => {
  User.find({}, function(err, users) {

    if (err) {
        res.status(500).send({ message: err });
        return;
    }

    res.status(200).send(users);  
  });
};

exports.deleteUser = (req, res) => {
  console.log(req.query.id)
  User.findOneAndDelete({ _id: req.query.id }, function(err) {
    if (err) {
      res.status(500).send({message: "Failed to delete"});
    }
    else {
      res.status(200).send({message: "Deleted Success fully"});   
    }
});
}