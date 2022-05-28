const {arrangeEmpDetails} = require('./javascript-logic-building-boilerplate-master/js/app')

const Main = () => {
    // console.log(arrangeEmpDetails([
    //     { id: 1, name: "Roger", salary: 50000, Bonus: 1000, appraisal: 80 },
    //     { id: 2, name: "David", salary: 55000, Bonus: 1000, appraisal: 70 },
    //     { id: 3, name: "Ali", salary: 65000, Bonus: 1000, appraisal: 90 },
    //     { id: 4, name: "Alo", salary: 70000, Bonus: 1000, appraisal: 95 },
    //     { id: 5, name: "Kristen", salary: 80000, Bonus: 1000, appraisal: 98 },
    //   ]));

    empDetails = [
      { id: 1, name: "Roger", salary: 50000, Bonus: 1000, appraisal: 80 },
      { id: 2, name: "David", salary: 55000, Bonus: 1000, appraisal: 70 },
      { id: 3, name: "Ali", salary: 65000, Bonus: 1000, appraisal: 90 },
      { id: 4, name: "Alo", salary: 70000, Bonus: 1000, appraisal: 95 },
      { id: 5, name: "Kristen", salary: 80000, Bonus: 1000, appraisal: 98 },
    ];

    const displayEmp = empDetails.map((emp, index) => {
      const empToBeDisplayed = `${index+1} ---- ${emp.name} ---- ${emp.salary}`;
      return empToBeDisplayed;
  });
  console.log(displayEmp);
  console.log(typeof empDetails[0].salary);
  const sum = empDetails.filter(emp => emp.name.startsWith('A')).reduce((sumSalary, emp)=> sumSalary + emp.salary,0);
  console.log(sum);
    
}

Main();