const AgeError = require('./custom-error');

const ageValidator = (age) => {
    try {
        if (age < 0){
            throw new AgeError('Age can not be negative');
        } else if (age< 18){
            throw new AgeError('Age is not eligible for voting');
        }
        console.log('Age is valid');
    }  catch(err){
        console.log(err.message);
        console.log(err.name);
        console.log(err.stack);
    } finally {
        console.log('Age is validated');
    }

}

ageValidator(13);