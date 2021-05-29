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
const volumeOfBox = ({ width, length, height }) => width * length * height;

console.log(volumeOfBox({ width: 11, length: 1, height: 2 }));
