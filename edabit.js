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

const [intToString, stringToInt] = [String, Number];

console.log(intToString(4), stringToInt("2"));
