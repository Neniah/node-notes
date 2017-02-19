var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/photos");

var user_schema = new Schema({
  name:String,
  username:String,
  password:String,
  age: Number,
  email: String,
  date_of_birth: Date
});

/*
  String
  Number
  date
  Buffer
  Boolean
  Mixed
  Objectid
  Array
*/

var User = mongoose.model("User", user_schema);

module.exports.User = User;
