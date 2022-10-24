const chai = require('chai');
const expect = chai.expect;

const calc = require('../calc/source');

describe('test calc functionality', ()=>{
    describe('test addition functionality', ()=>{
        it('2 + 2 should equal to 4', ()=>{
            expect(calc.add(2,2)).to.eql(4);
        })

    it('should add two numbers', ()=>{
        expect(calc.add(21,25)).to.equal(46);
        expect(calc.add(-45,90)).to.equals(45);
        expect(calc.add(10000000,10000001)).equal(20000001);
    })
})
    describe('test division functionality',()=>{
        it('should divide first number by second',()=>{
            expect(calc.div(6,2)).eql(3);
            expect(calc.div(10,8)).to.eql(1.25);
            expect(calc.div(-100, -25)).to.eql(4);
        })

        it('should return NaN', ()=>{
            expect(calc.div(19,0)).to.eql(undefined);
            expect(calc.div(-37,0)).to.eql(undefined);
        })
    })
})