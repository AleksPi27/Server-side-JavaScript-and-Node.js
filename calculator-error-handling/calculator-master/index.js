const chalk = require("chalk");
// debugger
const mathCalculator = require("./src/mathCalculator");
const scientificCalculator = require("./src/scientificCalculator");

// Read choice from console and execute `npm start math` or `npm start scientific`
const choice = process.argv[2]; 

const mathNum1 = 20;
const mathNum2 = 4;
const scfNum = 9.5;

if (choice === "math") {
 // Display all math operations
  console.log({add: mathCalculator.addNumbers(mathNum1, mathNum2)});
  console.log({subtract: mathCalculator.subNumbers(mathNum1, mathNum2)});
  console.log({modulo: mathCalculator.moduloNumbers(mathNum1, mathNum2)});
  console.log({mul: mathCalculator.mulNumbers(mathNum1, mathNum2)});
  console.log({div: mathCalculator.divNumbers(mathNum1, mathNum2)});
} else if (choice === "scientific") {
  // Display all scientific operations

} else {
  // debugger
  console.log("Please enter valid choice..!");
}