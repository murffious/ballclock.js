
const queue = require('./Queue');
const indicator = require('./indicator');

let timerIndication = new indicator();
// keeps track of the passing minutes by moving ball-bearings
// try catch 
class Clock {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.tracker = {};
        this.ballOrder = [];
        this.restart = false;
        this.input = [];
        this.goodToGo = this.checkInput(this.input);
        console.log(this.goodToGo)

    }
    // Store all of the node CLI arguments in an array
    get inputArr (){
        process.argv.shift();// strip off first 2 
        process.argv.shift();
        process.argv.forEach(input => {
            parseInt(input);
         })
        return this.input = process.argv;
    }
    checkInput(x) {
        // likley must be whole numbers no decimals or floats 
        // if 0 end program 
      // handle erros log to user must enter digits 
        return x.every(function (i) {
            return typeof i === "number";
        });

    }


    rotateBalls() {
       
        setInterval(function() {
             // takes from bottom of queue and moves to indicator each minute
            }, 60 * 1000);


        // var timerID = setInterval(function() {
        //      // takes from bottom of queue and moves to indicator each minute

             
        // }, 60 * 1000); 
        
        // clearInterval(timerID);
    }

    getCycleInDays (balls){

        // return   30 balls cycle after 15 days.

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



