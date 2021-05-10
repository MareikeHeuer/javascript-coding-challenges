/* Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀 */

/* const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is and adult, and is ${age} years old!`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy!`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); */

/* Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀 */

// Use map filter and reduce methods

// const ages = [5, 2, 4, 1, 15, 8, 3];

/*const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges); // scripts.js:71 (7) [36, 4, 32, 2, 76, 48, 28]
  console.log(adults); // scripts.js:72 (5) [36, 32, 76, 48, 28]

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;

  // average of 2 and 3    (2+3)/2 = 2.5 === 2/2 + 2/3 = 2.5
};
const avg1 = calcAverageHumanAge(ages); // scripts.js:70 (7) [36, 4, 32, 2, 76, 48, 28]
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2); // 44 47.333333333333336*/

/*Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

/*
const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg3 = calcAverageHumanAge2(ages); // scripts.js:70 (7) [36, 4, 32, 2, 76, 48, 28]
const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

console.log(avg3, avg4); // 44 47.333333333333336
*/

/* Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
The Complete JavaScript Course 26
Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];
GOOD LUCK 😀 */

/*const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

/*1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg) */

// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);
/*
(4) [{…}, {…}, {…}, {…}]
0: {weight: 22, curFood: 250, owners: Array(2), recFood: 284}
1: {weight: 8, curFood: 200, owners: Array(1), recFood: 133}
2: {weight: 13, curFood: 275, owners: Array(2), recFood: 191}
3: {weight: 32, curFood: 340, owners: Array(1), recFood: 376} */

/*2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓 */

// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? "much" : "little"
//   }`
// );

/*3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle'). */

// const ownersEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners);
// // .flat();

// console.log(ownersEatTooMuch); // (3) ["Matilda", "Sarah", "John"]

// const ownersEatTooLittle = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners);

// console.log(ownersEatTooLittle); // scripts.js:201 (3) ["Alice", "Bob", "Michael"]

/*4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"*/

// console.log(`${ownersEatTooMuch.join(" and ")}dogs eat too much!`); // Matilda and Sarah and Johndogs eat too much!
// console.log(`${ownersEatTooLittle.join(" and ")}dogs eat too little!`); // scripts.js:208 Alice and Bob and Michaeldogs eat too little!

// /*5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)*/

// console.log(dogs.some((dog) => dog.curFood === dog.recFood)); // false

// /*6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)*/

// const checkEatingOkay = (dog) =>
//   dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

// console.log(dogs.some(checkEatingOkay)); // true

// /*7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)*/

// console.log(dogs.filter(checkEatingOkay));

// // 8. Sort it by recommended food portion in an ascending order

// const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

/*
(4) [{…}, {…}, {…}, {…}]
0: {weight: 8, curFood: 200, owners: Array(1), recFood: 133}
1: {weight: 13, curFood: 275, owners: Array(2), recFood: 191}
2: {weight: 22, curFood: 250, owners: Array(2), recFood: 284}
3: {weight: 32, curFood: 340, owners: Array(1), recFood: 376}*/
/*


/* Write a while loop that censors all vowels from a lower case string*/

// let word = "helloworld";
// word.split("").map((a) => console.log(a));

let str = "hellothere";
for (i = 0; i < str.length; i++) {
  if (str[i] === "e") {
    str[i].replace("e", "*");
  }
}

console.log(str);

// Iterate over string
// check for vowels, eg includes method, then replace it with *

// console.log(str.replace("e", "*"));

// let i = 0;
// let str = 'helloworld';
// while (i < str.length) {
//   if (str[i] === "e") i++;
// }
