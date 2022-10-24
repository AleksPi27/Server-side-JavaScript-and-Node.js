// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math, english, science, social, language) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const marks = [math, english, science, social, language];
            if (marks.includes(undefined)) {
                reject('Null values for marks');
            } else {
                resolve(marks);
            }
        })
    })
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (totalMarks.includes(undefined)) {
                reject('Null values for marks');
            } else {
                resolve(totalMarks.reduce((prev, curVal) => prev + curVal, 0) / totalMarks.length);
            }
        })
    })
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!averageMarks) {
                reject('Cannot calculate grade because no average marks were provided');
            } else {
                console.log('Average marks', averageMarks);
                if (averageMarks >= 90) {
                    resolve('A+');
                } else if (averageMarks >= 80) {
                    resolve('A');
                } else if (averageMarks >= 70) {
                    resolve('B');
                } else if (averageMarks >= 60) {
                    resolve('C');
                } else if (averageMarks >= 50) {
                    resolve('E');
                }
                else {
                    resolve('F');
                }

            }
        })
    })
}

module.exports = {
    calculateAverageMarks, calculateGrade, calculateTotalMarks
}
