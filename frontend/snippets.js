/*
const MAX_LENGTH = 140;
var userInputText = prompt("Twitter message validator: ");
var charsWritten = userInputText.length;
console.log("You have written " + charsWritten + " characters, you have " + (MAX_LENGTH - charsWritten) + " left.");
console.log("Your final tweet will be " + userInputText.slice(0, MAX_LENGTH));
*/


/*
var name = prompt("What's your name: ");
var firstCharUC = name.slice(0, 1).toUpperCase();
var remainingCharsLC = name.slice(1, name.length).toLowerCase();
alert("Hello, " + firstCharUC + remainingCharsLC);
*/

/*
const urlParams = new URLSearchParams(window.location.search);
const urlBack = urlParams.get('urlBack');
console.log("urlBack %s", urlBack);
*/

/*
var dogAge = prompt("What's your dog's age: ");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("The human age for your dog is " + humanAge);
*/

/*
function lifeInWeeks(age) {
    const MAX_YEARS = 90;
    var yearsLeft = MAX_YEARS - age;
    var monthsLeft = yearsLeft * 12;
    var weeksLeft = yearsLeft * 52;
    var daysLeft = yearsLeft * 365;
    
    console.log("You have %s days, %s weeks, and %s months left.", daysLeft, weeksLeft, monthsLeft);
}

lifeInWeeks(51);
*/

/*
function bmiCalculator(weight, height) {
    return Math.round(weight / Math.pow(height, 2));
}

var bmi = bmiCalculator(45, 1.53);
console.log("Your BMI is %s", bmi);
*/

/*
var n = Math.floor(Math.random() * 6) + 1;
console.log("n: %s", n);
*/

/*
function calculateRandom1and100() {
    return Math.floor(Math.random() * 100) + 1;
}

alert("Welcome to the greatest Love Calculator!");
var yourName = prompt("What's your name: ");
var theirName = prompt("What's their name: ");
var loveScore = calculateRandom1and100();

if (loveScore > 70) {
    alert(yourName + " and " + theirName + " are this compatible: " + loveScore + "%. You love each other like Lalo loves Moni");
} else if (loveScore > 30 && loveScore <= 70) {
    alert(yourName + " and " + theirName + " are this compatible: " + loveScore + "%");
} else if (loveScore <= 30) {
    alert(yourName + " and " + theirName + " are this compatible: " + loveScore + "%. You go together like oil and water");
}
*/

/*
function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
}

bmiCalculator(67, 1.65);
*/

/*
function isLeap(year) {
    var isDivisibleBy4 = (year % 4) === 0;
    var isDivisibleBy100 = (year % 100) === 0;
    var isDivisibleBy400 = (year % 400) === 0;
    var isLeap = false;

    if (isDivisibleBy4) {
        if (isDivisibleBy100) {
            if (isDivisibleBy400) {
                isLeap = true;
            }        
        } else {
            isLeap = true;
        }
        
    }
        
    return isLeap;
}

console.log("2000? " + isLeap(2000));
console.log("2100? " + isLeap(2100));
console.log("1989? " + isLeap(1989));

console.log("1948? " + isLeap(1948));
console.log("1998? " + isLeap(1998));
console.log("2020? " + isLeap(2020));
*/

/*
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var yourName = prompt("What's your name: ");

if (guestList.includes(yourName)) {
    console.log("Welcome!");
} else {
    console.log("Sorry, maybe next time.");
}
*/

/*
var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++;
}


function callFizzBuzz(n) {
    for (let index = 0; index < n; index++) {
        fizzBuzz();
        console.log(output);        
    }
}

callFizzBuzz(30);
*/

/*
function determineWhosBuyingLunch(names) {
    var randomIndex = calculateRandomIntegerUpTo(names.length, true);
    return names[randomIndex] + " is going to buy lunch today!";
}

function calculateRandomIntegerUpTo(topLimit, isZeroIndexed) {
    return Math.floor(Math.random() * topLimit) + (isZeroIndexed? 0 : 1);
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

for (let index = 0; index < 10; index++) {
    console.log(determineWhosBuyingLunch(names));
}
*/

/*
var bottlesOnTheWall = 99;

while (bottlesOnTheWall > 0) {
    console.log(`${bottlesOnTheWall} bottles of beer in the wall, ${bottlesOnTheWall} bottles of beer.`);
    bottlesOnTheWall--;
    console.log(`Take one down and pass it around, ${bottlesOnTheWall} bottles of beer on the wall.`);
}
*/

/*
function fibonacciGenerator (n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        if (i < 2) {
            arr.push(i);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }

    return arr;
}

console.log(fibonacciGenerator(15));
*/

/*
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, operatorFunction) {
    return operatorFunction(num1, num2);
}

var num1 = 25;
var num2 = 5;

//debugger;

console.log(`${num1} + ${num2}: ${calculate(num1, num2, add)}`);
console.log(`${num1} * ${num2}: ${calculate(num1, num2, multiply)}`);
console.log(`${num1} - ${num2}: ${calculate(num1, num2, substract)}`);
console.log(`${num1} / ${num2}: ${calculate(num1, num2, divide)}`);
*/

var houseKeeper1 = {
    name: "Lola",
    age: 75,
    yearsOfExperience: 55,
    placeOfResidence: "La Calera",
    preferredHousePlaces: ["kitchen", "bedroom"],
    clean: function() {
        alert("Cleaning in progress 1...");
    }
} 

console.log(`name ${houseKeeper1.name}, placeOfResidence ${houseKeeper1.placeOfResidence}`);
houseKeeper1.clean();

function HouseKeeper (name, age, yearsOfExperience, placeOfResidence, preferredHousePlaces) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.placeOfResidence = placeOfResidence;
    this.preferredHousePlaces = preferredHousePlaces;
    this.clean = function() {
        alert("Cleaning in progress 2...");
    }
}

var houseKeeper2 = new HouseKeeper("Rocío", 25, 5, "Junín", ["bathroom", "lobby", "garden"]);
console.log(`name ${houseKeeper2.name}, preferredHousePlaces ${houseKeeper2.preferredHousePlaces}`);
houseKeeper2.clean();