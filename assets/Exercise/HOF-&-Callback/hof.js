// arr.forEach((item) => {
//   console.log(item);
// });

// arr.map((item) => {
//   console.log(item);
// });

// const evenNumbers = arr.filter((x) => {
//   return x % 2 === 0;
// });

// console.log(evenNumbers);

const arr = [0, 1, 2, 3, 4, 5];

const sum = arr.reduce((total, item) => {
  return total + item;
}, 0);

console.log(sum);
