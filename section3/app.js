console.log('Startig app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var sum = notes.add(3,5);
console.log('Result:' , sum);

//var user = os.userInfo();

//fs.appendFile('greetings.txt', `\nHello ${user.username}! You are ${notes.age}`);
