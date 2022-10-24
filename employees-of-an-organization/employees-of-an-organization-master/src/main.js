const { getEmployee, createEmployee } = require('./callbacks');

const employees = [
    { name: 'Adam', designation: 'Manager' },
    { name: 'Harry', designation: 'Developer' }
];
const employee = { name: 'John', designation: 'Developer' };

// getEmployee(employees, (err, result) => { 
//     if (err){
//         console.log(err);
//     } else{
//         console.log(result);
//     }
// });

createEmployee(employees, employee, getEmployee)

