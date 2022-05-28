function School(year, floors, square, pupils) { 
    this.year = year;
    this.floors = floors;
    this.square = square;
    this.pupils = pupils;
}

let school = new School(1976, {square : 3, year :'1000 squared metres', floors : 1500});
console.log(school);

function myFunc({name="Aleks", salary = 1000} = {}){
    console.log(name);
    console.log(salary);
};

myFunc({salary: 1, name: 100});