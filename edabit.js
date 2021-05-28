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
const evenOrOdd = (arr) =>
  arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";

console.log(evenOrOdd([1, 3, 4]));
