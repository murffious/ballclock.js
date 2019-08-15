
const queue = require('./Queue');
const indicator = require('./indicator')
// keeps track of the passing minutes by moving ball-bearings

class Clock {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.tracker = {};
        this.ballOrder = [];
        this.restart = false;
    }

    checkInput(x) {
        return x.every(function (i) {
            return typeof i === "integer";
        });
    }
}
// throw error s checking
// Each minute, a rotating arm removes a ball bearing 
// from the queue at the bottom, raises it to the top 
// of the clock and deposits it on a track leading to 
// indicators displaying minutes, five-minutes and hours.


// Your program must compute the time before repetition, 
// which varies according to the total number of balls present.
module.exports = Clock;



