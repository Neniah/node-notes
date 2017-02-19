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

user_schema.virtual("password_confirmation").get(function(){
  return this.pass_cofirm;
}).set(function(password){
  this.pass_confirm = password;
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;
