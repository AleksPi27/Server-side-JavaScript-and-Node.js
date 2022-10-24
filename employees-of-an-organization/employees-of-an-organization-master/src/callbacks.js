
// Define a getEmployee function that iterates over the employees list and displays it
// Employees must be displayed after a timeout of 1 second.
getEmployee = (employees, callback) => {
    setTimeout(() => {
        // Write code here to display the name of the employee and return a callback      

        const employeeNames = employees.map(employee => employee.name);
        let err;
        employeeNames.forEach(employeeName => {
            if (employeeName) {
                console.log(employeeName);
            } else {
                err = "Empty employee's name";
            }
        })

        if (!callback) {
            callback = (err, result) => { 
                    if (err){
                        console.log(err);
                    } else{
                        console.log(result);
                    }
                }
        }
        return callback(err, employeeNames);
    }, 1000);
}

// Define a function that creates a new employee after 2 seconds.
// and then makes a call to callback function to display the same.
createEmployee = (employees, employee, callback) => {
    setTimeout(() => {
        let err;
        if (!employee) {
            err = "Empty employee";
        } else {
            employees.push(employee);
        }
        return callback(err, employees);
    }, 2000)
}

module.exports = { getEmployee, createEmployee }



