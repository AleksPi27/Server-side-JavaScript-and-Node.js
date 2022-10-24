const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    expect(addition(19,14)).to.eql(33).to.be.a('number');
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    expect(addition(-33,-67)).to.eql(-100).to.be.a('number');
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    expect(addition(1111,-102)).to.eql(1009).to.be.a('number');
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    expect(subtraction(78,77)).to.eql(1).to.be.a('number');
  });
  it('Check if either of number is negative produce sum as output', () => {
    expect(subtraction(34,-77)).to.eql(111).to.be.a('number');

  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    expect(subtraction(78,0)).to.eql(78).to.be.a('number');
  });
});
