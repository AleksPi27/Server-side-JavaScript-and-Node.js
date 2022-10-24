const assert = require('chai').assert;
const packageFile = require('../package.json');
const calculator = require('../calculator');
const glob = require('glob');
const fs = require('fs');

// variable declairation
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      // testcase to test is dependencies are used or not
      it('Add two positive numbers, returning get positive sum', function () {
        const result = calculator('A', {lhs:12,rhs:13});
        assert.typeOf(result,'number');
        assert.equal(result, 25);
      });
      // test case to test add functionality

      it('Add two negative numbers, returning get negative sum', function () {
        const result = calculator('A', {lhs:-12,rhs:-13});
        assert.typeOf(result,'number');
        assert.equal(result, -25);
      });

      // test case to test add functionality
      it('Add two number, with either of them is negative, producing subtracted output'
        , function () {
          const result = calculator('A', {lhs:12,rhs:-13});
          assert.typeOf(result,'number');
          assert.equal(result, -1);
        });
      // test case to test add functionality
      it('Add zeros, produces zero', function () {
        const result = calculator('A', {lhs:0,rhs:0});
        assert.typeOf(result,'number');
        assert.equal(result, 0);
      });
    });
    describe('Subtraction functionality testing', function () {
      // test case to test subtract functionality
      it('Subtract two positive numbers, returning get positive subtraction',
        function () {
          const result = calculator('S', {lhs:14,rhs:13});
          assert.typeOf(result,'number');
          assert.equal(result, 1);
        });

      // test case to test subtract functionality
      it('Subtract two negative numbers, returning get negative subtraction',
        function () {
          const result = calculator('S', {lhs:-500000,rhs:-94213});
          assert.typeOf(result,'number');
          assert.equal(result, -405787);
        });

      // test case to test subtract functionality
      it('Subtract two number, with either of them is negative, producing sum output'
        , function () {
          const result = calculator('S', {lhs:100,rhs:-13});
          assert.typeOf(result,'number');
          assert.equal(result, 113);
        });

      // test case to test subtract functionality
      it('Subtract zeros, produces zero', function () {
        const result = calculator('S', {lhs:0,rhs:0});
        assert.typeOf(result,'number');
        assert.equal(result, 0);
      });
    });
    describe('Multiplication functionality testing', function () {
      // test case to test multiply functionality
      it('Multiply two positive numbers, returning get positive Multiplication', function () {
        const result = calculator('m', {lhs:12,rhs:18});
        assert.typeOf(result,'number');
        assert.equal(result, 216);
      });
      // test case to test multiply functionality
      it('Multiply two negative numbers, returning get positive Multiplication', function () {
        const result = calculator('m', {lhs:-12,rhs:-18});
        assert.typeOf(result,'number');
        assert.equal(result, 216);
      });
      // test case to test multiply functionality
      it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`,
        function () {
          const result = calculator('m', {lhs:12,rhs:-18});
          assert.typeOf(result,'number');
          assert.equal(result, -216);
        });

      // test case to test multiply functionality
      it('Multiply zeros, produces zero', function () {
        const result = calculator('m', {lhs:12,rhs:0});
        assert.typeOf(result,'number');
        assert.equal(result, 0);
      });
    });
    describe('Division functionality testing', function () {
      // test case to test divide functionality

      it('Divide two positive numbers, returning get positive Multiplication', function () {
        const result = calculator('d', {lhs:12,rhs:18});
        assert.typeOf(result,'number');
        assert.equal(result, 12/18);
      });


      // test case to test divide functionality
      it('Divide two negative numbers, returning get positive Multiplication', function () {
        const result = calculator('d', {lhs:-12,rhs:-18});
        assert.typeOf(result,'number');
        assert.equal(result, 12/18);
      });

      // test case to test divide functionality

      it('Divide two number, with either of them is negative, producing negative Division output',
        function () {
          const result = calculator('d', {lhs:1000,rhs:-25});
        assert.typeOf(result,'number');
        assert.equal(result, -40);
        });

      // test case to test divide functionality
      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        const result = calculator('d', {lhs:12,rhs:0});
        assert.typeOf(result,'string');
        assert.equal(result, 'Can not divide by zero');
      });
    });
    describe('Unknown operation testing', function () {
      // test case to test divide functionality
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`,
        function () {
          const result = calculator('B', {lhs:12,rhs:6});
          assert.typeOf(result,'string');
          assert.equal(result, 'Unknown operation');
        });
    });
  });
});