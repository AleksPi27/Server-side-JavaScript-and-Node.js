const {
    findMaxValue,
    filterValues,
    nameInCapital,
  } = require('./LodashExample');

  const {addNumbers,
    subNumbers,
    mulNumbers,
    divNumbers} = require('./SimpleCalculator');

    const {  getOSName,
      getFreeMemory,
      getCurrentUser,
      getHostName,
      getCPUDetails} = require('./System');

  // console.log(nameInCapital(['aleksandr piliakin', 'vadim ivanov', 'petya pupkin']));

  console.log(getOSName());
  console.log(getFreeMemory());
  console.log(getCurrentUser());
  console.log(getHostName());
  console.log(getCPUDetails());