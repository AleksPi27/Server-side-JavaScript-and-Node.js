const calculateTotalBillAfterDiscount = (error, billAmount, discountPercentage) => {
  setTimeout(() => {
    if (error)
    {
      return console.log(error);
    }
    console.log(billAmount - billAmount * discountPercentage);
  }, 2000);
};

const validateBillAmount = (billAmount) => {
  if (billAmount <= 0) {
    console.log("Invalid bill amount");
  } else {
    console.log("Valid bill amount");
  }
};


let billAmt = process.argv[2];

let discountPercentage = process.argv[3];

calculateTotalBillAfterDiscount('Error', billAmt, discountPercentage);
validateBillAmount(billAmt);
// function prompt() {
//   process.stdout.write("\n\n");
//   process.stdout.write("Enter your input: ");
// }

// async function main() {
//   process.nextTick(() => {
//     var stdin = process.openStdin();
//     prompt();
//     stdin.addListener("data", (d) => {
//       const data = d.toString().trim();
//       console.log("You typed:", data);
//       if (data === "proceed") {
//         process.stdout.write("Goodbye");
//         process.exit();
//         printDude();
//       } else {
//         prompt();
//       }
//     });

//     stdin.addListener("exit", () => {
//       process.stdout.write("\n\n\n");
//     });
//   });
// }

// function printDude() {
//   process.nextTick(() => {
//     setTimeout(() => {
//       const start = Date.now();
//       while (Date.now() - start <= 1000) {
//         console.log("Dude");
//       }
//     }, 1000);
//   });
// }

// main();
// printDude();
// printDude();

// stdin.addListener('exit', () => {
//     process.stdout.write('\n\n');
//     process.stdout.write()
// })

// do {

// } while()
