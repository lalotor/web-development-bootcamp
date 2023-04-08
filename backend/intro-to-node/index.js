// const fs = require('fs');

// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log("Today's match!!! Super Hero: '" + mySuperheroName + "' VS Super Villain: '" + mySupervillainName + "'. Who will emerge victorious??? 👀");
