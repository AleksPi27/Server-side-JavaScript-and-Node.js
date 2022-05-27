function printMessage() {
  console.log("Printing message");
}

function printingArgument(arg) {
  console.log("The argument is ", arg);
}

function calculateSum(a, b) {
  let sum = a + b;
  console.log("The sum is ", sum);
}

printMessage();

printingArgument("argrument");

calculateSum(-3, -7);

function sendMessage(message) {
  console.log(message);
}

let result = sendMessage("Hi there!");
console.log("Result is ", result);

function calc(a, b) {
  return a + b;
}

let sum = calc(10000, 2345);
console.log("Sums is ", sum);

let display = function (callback) {
  console.log("Anonymous function");
  callback();
};

display(function () {
  console.log("Callback function executed inside anonymous one");
});

(function () {
  console.log("Invoke the function immediately");
})();

let employee = {
  name: "John",
  salary: 2000,
};

(function () {
  console.log(
    `employee's name is ${employee.name} and his salary is ${employee.salary}`
  );
})();

display = function () {
  console.log("Anonymous function assigned to a variable");
};

display();

display = () => {
  console.log("This is an arrow function");
};

display();

calc = function (a, b) {
  return a + b;
};

console.log(calc(1, 0));

let calc1 = (a, b) => {
  return a + b;
};

console.log(calc1(0,0));

