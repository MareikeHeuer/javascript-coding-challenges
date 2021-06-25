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

/*const rotateMaxNumber = (num) =>
  parseInt(num.toString().split("").sort().reverse().join(""));

  console.log(rotateMaxNumber(123));*/

//// DIFFERENCE OF VOLUMES OF CUBOIDS

/*function findDifference(a, b) {
  return Math.abs(
    a.reduce((previous, current) => previous * current) -
      b.reduce((previous, current) => previous * current)
  );
}

console.log(findDifference([28, 16, 29], [7, 8, 17]));*/

//// INVERT COLORS
/*Create a function that inverts the rgb values of a given tuple.*/

/*const colorInvert = (rgb) => rgb.map((x) => 255 - x);
console.log(colorInvert([165, 170, 119]), [90, 85, 136]);*/

//// DEFAULT MOOD
/*Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".*/

/*const moodToday = (mood) => `Today, I am feeling ${mood || "neutral"}`;

console.log(moodToday("happy"));*/

//// FIND THE BUG: RETURNING THE CONTAINER

/*The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...*/

/*const getContainer = function (product) {
  let container;
  switch (product) {
    case "Bread":
      container = "bag";
      break;
    case "Beer":
      container = "bottle";
      break;
    case "Milk":
      container = "bottle";
      break;
    case "Cheese":
      container = null;
      break;
    case "Eggs":
      container = "carton";
      break;
    case "Candy":
      container = "plastic";
      break;
    default:
      container = null;
  }

  return container;
};

console.log(getContainer("Milk"));*/

//// SQUARES AND CUBES
/*Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.*/

/*const checkSquareAndCube = ([a, b]) => Math.sqrt(a) === Math.cbrt(b);

console.log(checkSquareAndCube([4, 8]));*/

//// MAXIMUM WEIGHT ALLOWED
/*Create a function that returns true if the combined weight of a car car and the weight of the passengers p in the car is less than the maximum weight maxWeight the car is allowed to carry. Otherwise, return false. The weight of the car and the weight of the passengers are given in pounds. The maximum weight is given in kilograms.*/

/*function weightAllowed(car, p, maxWeight) {
  const passengers = p.reduce((acc, v) => acc + v, 0);
  return (car + passengers) * 0.453592 < maxWeight;
}

console.log(weightAllowed(3000, [150, 201, 75, 88, 195], 1700));*/

////A SIMPLE TASK

/*Create a function that takes a number n and return its decimal part.*/

/*function decimalPart(n) {
  return Math.abs(n) % 1;
}

console.log(33.4);*/

//// DESTRUCTURING ASSIGNMENT

/*Using Destructuring Assignment (check the Resources tab), your task is to unpack the array writeyourcodehere into three variables, first, a variable to ignore all middle values and last.*/

/*const [first, , , , , , , last] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(first, last);*/

//// LEVEL 5 ////

////  CLASSES FOR FETCHING INFORMATION

/*Create a class that takes the following four arguments for a particular football player:

name
age
height
weight
Also, create three functions for the class that returns the following strings:

getAge() returns "name is age age"
getHeight() returns "name is heightcm"
getWeight() returns "name weighs weightkg"*/

/*Test.assertEquals(player1.getAge(), 'Patrick Mahomes is age 24')*/

/*class Player {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge = () => `${this.name} is age ${this.age}`;
  getHeight = () => `${this.name} is ${this.height}cm`;
  getWeight = () => `${this.name} weighs ${this.weight}kg`;
}

player1 = new Player("Patrick Mahomes", 24, 188, 104);

console.log(player1.getAge());
console.log(player1.getHeight());
console.log(player1.getWeight());*/

//// WORDCHARWORD

/*Create a function that will put the first argument, a character, between every word in the second argument, a string.
Test.assertEquals(add("#", "hello world"), "hello#world")*/

/*const add = (char, str) => str.split(" ").join(char);

console.log(add("#", "Hello World"));*.


//// INVERT AN ARRAY
/*Create a function that takes an array of numbers arr and returns an inverted array.

Test.assertSimilar(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])*/

/*const invertArray = (arr) => arr.map((num) => (num != 0 ? -num : 0));

console.log(invertArray([1, -2, 3, -4, 5]));*/

//// AMAZING EDABIT
/*Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

Test.assertEquals(amazingEdabit("edabit is amazing."), "edabit is amazing.")*/

/*const amazingEdabit = (str) =>
  str.includes("edabit") ? str : str.replace("amazing", "not amazing");

console.log(amazingEdabit("edabit is amazing."));*/

//// RECREATING THE STRING.LENGTH PROPERTY
/* Create a function which returns the length of a string WITHOUT using string.length*/

/*function length(s) {
  return s.lastIndexOf("");
}

console.log(length("Hello World"));*/

//// SUM OF CUBES
/*Create a function that takes a positive integer n, and returns the sum of all the cubed values from 1 to n.

Test.assertEquals(sumCubes(3), 36)*/

/*function sumCubes(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i ** 3;
  }
  return total;
}

console.log(sumCubes(3));*/

//// REVERSE STRING
// Test.assertEquals(sortWord("dcba"), "abcd")

/*const sortWord = (word) => word.split("").sort().join("");
console.log(sortWord("dcba"));*/

//// COUNT THE SYLLABLES
/*Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
Test.assertEquals(countSyllables("Hehehehehehe"), 6)*/

/*const countSyllables = (str) => str.length / 2;

console.log(countSyllables("Hehehehehehe"));'/


//// CASE INSENSITIVE COMPARISON
/*Write a function that validates whether two strings are identical. Make it case insensitive.
Test.assertEquals(match("hello", "hELLo"), true)*/

/*const match = (s1, s2) => s1.toUpperCase() === s2.toUpperCase();

console.log(match("hello", "hELLo"));*/

//// DOES A NUMBER EXIST?
/*Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.
Test.assertEquals(validStrNumber("3.2"), true)*/

/*const validStrNumber = (n) => (isNaN(n) ? false : true);

console.log(validStrNumber("3.2"));*/

//// CLEANING UP MESSY ARRAYS
/*Create a function that takes an array. This array will contain numbers represented as strings.

Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

Return an empty array if there are no even numbers, or odd.
Test.assertSimilar(cleanUpArray(['9', '4', '5', '8']), [[4, 8], [9, 5]])*/

const cleanUpArray = (arr) => {
  const even = arr.map(Number).filter((num) => num % 2 === 0);
  const odd = arr.map(Number).filter((num) => num % 2 === 1);
  return [even, odd];
};

console.log(cleanUpArray(["9", "4", "5", "8"]));
