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

word = (s) =>
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

console.log(word("eight"));
