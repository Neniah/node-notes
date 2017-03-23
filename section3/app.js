console.log('Startig app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


var filterArray = _.uniq(['Maria',1, 'Maria', 1, 2, 3, 4]);
console.log(filterArray);

//console.log(_.isString(true));
//console.log(_.isString('Maria'));

//var res = notes.addNote();
//console.log(res);

//var sum = notes.add(3,5);
//console.log('Result:' , sum);

//var user = os.userInfo();

//fs.appendFile('greetings.txt', `\nHello ${user.username}! You are ${notes.age}`);
