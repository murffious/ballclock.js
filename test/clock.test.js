'use strict';
const assert = require('chai').assert;

const Clock = require('../src/clock');
let ballClock = new Clock();


// Sample Input

// 30
// 45
// 0

// Output for the Sample Input

// 30 balls cycle after 15 days.
// 45 balls cycle after 378 days.

// Valid numbers are in the range 27 to 127. A zero signifies the end of input.
describe('Ball Clock', () => {
    context('Validate Input', () => {
        it('should fail if any items in input are not all valid integers', () => {
            let inputList = [];

            let actual = ballClock.checkInput(inputList);

            assert.isOk(actual, 'Input items should all be integers');
        })
        it('should fail if any items in input are not in the range 27 to 127', () => {
            let inputList = [];

            let actual = ballClock.checkInput(inputList);

            assert.isOk(actual, 'Numbers should all be in the range 27 to 127');
        })
    })
})

// Result
// number of balls given in the input and 

// the number of days (24-hour periods) which elapse before the clock returns to its initial ordering.