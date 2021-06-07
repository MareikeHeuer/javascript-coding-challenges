//// EVEN OR ODD?
/*Given an array of integers, determine whether the sum of its elements is even or odd.

The return value should be a string ("odd" or "even").

If the input array is empty, consider it as an array with a zero ([0]).*/

// const evenOrOdd = function (arr) {
//   const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);

//   if (sum % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
//   return sum;
// };

// console.log(evenOrOdd([1, 3, 4]));

// refactored
/*const evenOrOdd = (arr) =>
  arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";

console.log(evenOrOdd([1, 3, 4]));*/

//// Minimal VI: Ternary Operator
/*Refactor the following code*/

/*function areTrue(a, b) {
  if (a == true) {
    if (b == true) {
      return "both";
    } else {
      return "first";
    }
  } else if ((b = true)) {
    return "second";
  } else {
    return "neither";
  }
}*/

/*const areTrue = (a, b) =>
  a && b ? "both" : a ? "first" : b ? "second" : "neither";

console.log(areTrue(false, true));*/

//// STRING AND NUMBER CONVERSIONS
/* You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.*/

/*const [intToString, stringToInt] = [String, Number];

console.log(intToString(4), stringToInt("2"));*/

//// 50-30-20-STRATEGY
/*The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.*/

/*function fiftyThirtyTwenty(ati) {
  return { Needs: ati * 0.5, Wants: ati * 0.3, Savings: ati * 0.2 };
}

console.log(fiftyThirtyTwenty(10000));*/

//// VOLUME OF A BOX
/*Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.*/
/*const volumeOfBox = ({ width, length, height }) => width * length * height;

console.log(volumeOfBox({ width: 11, length: 1, height: 2 }));
*/

//// WEIGHT CONVERTOR
/*You have been given a fraction of an ounce but you need to convert it to grams. Given an ounce weighs 28.3495 grams, convert the amount of ounces to grams. Round the number of grams to one decimal place.
Add the string "grams" to the end with a space.*/

/*const convert = (num) => `${(num * 28.3495).toFixed(1)} grams`;
console.log(convert(0.0003527396));*/

//// A DAY AT THE MARKET
/*Backpack Bill and Wallet Will set off for the annual festival. As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will. Taking this as a challenge, Will refutes and a competition spurs into action.

Backpack Bill has an infinite inventory space, but a limited number of coins.
Wallet Will has an infinite number of coins, but a limited inventory space.
Create a function that returns the name of the man who can bring home the most items. The parameters are given as follows:

Bill's amount of money.
Will's amount of inventory space.
The item's price.
The item's size.*/

/*function whoWinsTonight(coins, space, price, size) {
  const bill = Math.floor(coins / price);
  const will = Math.floor(space / size);

  if (bill === will) {
    return "Tie";
  }

  return bill > will ? "Bill" : "Will";
}

console.log(whoWinsTonight(20, 20, 5, 10));*/

//// LESS THAN, GREATER THAN
/*Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.*/

/*const arrBetween = (num1, num2, arr) =>
  arr.filter((num) => num > num1 && num < num2);

console.log(arrBetween(0, 9, [1, 2, 3, 78]));*/

//// RETURN TOTAL NUMBERS OF PAREMETERS
/*const numberArgs = (...args) => args.length;

console.log(numberArgs(2, 3, 4));*/

//// FRONT 3 - SLICE CHECK REPEAT CONCATENATE
/*Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.*/

/*const frontThree = (str) => str.slice(0, 3).repeat(3);

console.log(frontThree("Python"));*/

//// WORD NUMBERS
/*Create a function that returns a number, based on the string provided. */

/*word = (s) =>
  [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].indexOf(s);

console.log(word("eight"));*/

//// TAXI JOURNEY
/*A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.

Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.*/

/*const journeyDistance = (n) => (n < 3 ? 0 : 1 + (n - 3) / 2);

console.log(journeyDistance(3));*/

//// EXTRACT CITY FACTS

/*Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).*/

/*const cityFacts = (city) =>
  `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;

console.log(
  cityFacts({ name: "Manila", population: "1,780,148", continent: "Asia" })
);*/

//// N TABLES + 1
/*Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.*/

/*function nTablesPlusOne(n) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(n * i + 1);
  }
  return result.toString();
}

console.log(nTablesPlusOne(1));*/

//// RETURN THE RELATION
/*Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.*/

/*const relationToLuke = function (name) {
  const relations = {
    "Darth Vader": "father",
    Leia: "sister",
    Han: "brother in law",
    R2D2: "droid",
  };
  return `Luke I am your ${relations[name]}`;
};

console.log(relationToLuke("Leia"));*/

//// CONCATENATING FIRST AND LAST CHARACTER OF A STRING
/*Creates a function that takes a string and returns the concatenated first and last character.*/
/*const firstLast = (n) => n[0] + n.slice(-1);

console.log(firstLast("Ganesh"));*/

//// STUTTERING FUNCTION
/*Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.*/

/*const stutter = (word) => `${`${word.slice(0, 2)}... `.repeat(2)}${word}?`;

console.log(stutter("hello"));*/

//// END CORONA
/*Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.*/

/*const endCorona = (recovers, newCases, activeCases) =>
  Math.ceil(activeCases / (recovers - newCases));*/

//// CONVERT ALL ARRAY ITEMS TO STRINGS
/*Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.*/

/*const parseArray = (arr) => arr.map((x) => x.toString());

console.log(parseArray([1, 2, "a", "b"]));'/


//// IS THE WORD SINGULAR OR PLURAL?
/*Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".*/

/*const isPlural = (word) => word.endsWith("s");

console.log(isPlural("flowers"));*/

//// SUM GREATER THAN FIVE
/*Write a function that returns the sum of elements greater than 5, in the given array*/

/*const sumFive = (arr) => arr.reduce((a, b) => (b > 5 ? a + b : a), 0);

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));*/

//// THE FIFTH ARGUMENT
/*Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".*/
/*const fifth = (...args) =>
  args.length < 5 ? "Not enough arguments" : typeof args[4];

console.log(fifth("a", 2, 3, 4, 5));*/

//// ROTATE FOR MAX NUMBER

/*Create a function which takes a number and returns the maximum value by rearranging its digits.*/

const rotateMaxNumber = (num) =>
  parseInt(num.toString().split("").sort().reverse().join(""));
console.log(rotateMaxNumber(123));
