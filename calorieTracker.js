var cyclingCaloriesBurning = parseInt(process.argv[2])
var swimmingCaloriesBurning = parseInt(process.argv[3])
var runningCaloriesBurning = parseInt(process.argv[4])
var dayCaloriesIntake = parseInt(process.argv[5])


const calculateCalories = function (cyclingCaloriesBurning, swimmingCaloriesBurning, runningCaloriesBurning, dayCaloriesIntake) {
    if (cyclingCaloriesBurning<=0 || swimmingCaloriesBurning <=0 || runningCaloriesBurning<=0 || dayCaloriesIntake<0) return -1;
    else {
    const caloriesInPound = 1000
    const numberOfWeeks = 4;
    const numberOfHalfHours = 2;
    const daysInMonth = 30;
    let caloriesBurntInMonth =  numberOfWeeks * numberOfHalfHours * (cyclingCaloriesBurning + swimmingCaloriesBurning + runningCaloriesBurning);
    let monthCaloriesIntake = daysInMonth * dayCaloriesIntake;
    return (caloriesBurntInMonth - monthCaloriesIntake) / caloriesInPound;
    }
}

console.log(`Sam's weight loss in a month is ${calculateCalories(cyclingCaloriesBurning, swimmingCaloriesBurning, runningCaloriesBurning)} pounds`)