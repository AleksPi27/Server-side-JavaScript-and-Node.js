const chai = require('chai');
const expect = chai.expect;

const asyncCalc = require('../source/asyncCalc');

describe('asynchronous testing using Mocha and Chai', ()=>{
    it('should add data asynchronously', (done)=>{
        let result = asyncCalc.asyncAdd(3,2, (addRes)=>{
            expect(addRes).to.eql(5).to.be.a('number');
            done();
        })
    })

    it('should subtract data asynchronously', (done)=>{
        let result = asyncCalc.asyncSub(-3,-2,(subRes)=>{
            expect(subRes).to.eql(-1).to.be.a('number');
            done();
        })
    })
})