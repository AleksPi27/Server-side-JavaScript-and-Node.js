const reports = process.report;

class FinalDecision {
    static first = 'First';
    static second = 'Second';
    static third = 'Third';
    static fourth = 'Fourth';
    static fifth = 'Fifth';
}

const moveToAnotherCountry = (decisionMaker)=>{
    let finalDecision;
    if (decisionMaker<0){
        finalDecision = FinalDecision.first;
        console.log('Invalid input');
    } else if (decisionMaker===0){
        finalDecision = FinalDecision.second;
        console.log('Stay here');
    } else if (decisionMaker<3){
        finalDecision = FinalDecision.third;
        console.log('Move to Serbia');
    } else if (decisionMaker < 6) {
        finalDecision = FinalDecision.fourth;
        console.log('Move to Sweden');
    } else{
        finalDecision = FinalDecision.fifth;
        console.log('Move to the USA');
    }
    // debugger
    return finalDecision;
}

const input = Math.random()* 9;

console.log({input});

try {
moveToAnotherCountry(input1);
} finally{
reports.writeReport('./reports.json');
}