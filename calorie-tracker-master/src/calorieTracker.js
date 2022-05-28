const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   if (cycling<=0 || swimming <=0 || running<=0 || extraCalorieInTake<0) return -1;
    else {
    const caloriesInPound = 1000
    const numberOfWeeks = 4;
    const numberOfHalfHours = 2;
    const daysInMonth = 30;
    let caloriesBurntInMonth =  numberOfWeeks * numberOfHalfHours * (cycling + swimming + running);
    let monthCaloriesIntake = daysInMonth * extraCalorieInTake;
    return (caloriesBurntInMonth - monthCaloriesIntake) / caloriesInPound;
    }
}

module.exports = calculateWeightLostInAMonth

