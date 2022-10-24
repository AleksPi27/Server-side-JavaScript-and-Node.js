// // let arr1 = [0, 1, 0, 3, 4, 5, 6];

// // const total = arr1.reduceRight((prev, cur) => prev - cur);

// // console.log(total);

// // let total1 = new Array();
// // arr1.forEach((x) => {
// //   total1.push(x ** 2);
// // });

// // console.log(total1);

// // let filteredTotal1 = total1.filter((x, i) => {
// //   if (i % 2 === 0) {
// //     return typeof x === "number";
// //   }
// // });

// // console.log(filteredTotal1);

// // let filteredAndMappedTotal1 = total1.filter((x, i) => {
// //   return i % 2 !== 0 && typeof x === "number";
// // }).map(x => x*2).slice(1,2);

// // console.log(`filteredAndMappedTotal1 is ${filteredAndMappedTotal1}`);

// // console.log(filteredTotal1.slice(1,3));
// // console.log(filteredTotal1.slice(-3));

// let array = new Array(26);
// console.log(array);
// array = Array.from([...array].map((e,i) => i+97))
// console.log(array);
// array = array.map(x => String.fromCharCode(x));
// console.log(array);

// array = array.fill(1, 16, 20);
// console.log(array);

// array.unshift({name: 'mainObject'});

// console.log(array);

// array.push('Hellooooo');

// console.log(array);

// console.log(array.pop());

// console.log(array);

// console.log(array.shift());

// console.log(array);

const elements = ['Banana', 'Apple', 'Orange', 'Pomodoro'];
const presentedDesiredElement = 'Orange';
const partiallyPresentedElement = 'pple';
const unpresentedDesiredElement ='Lenovo';

console.log(elements.includes(presentedDesiredElement));
console.log(elements.includes(partiallyPresentedElement));
console.log(elements.includes(unpresentedDesiredElement));
