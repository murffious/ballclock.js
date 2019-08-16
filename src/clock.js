
const queue = require('./Queue');
const indicator = require('./indicator');

let timerIndication = new indicator();
// keeps track of the passing minutes by moving ball-bearings
// try catch 
class Clock {
  constructor() {
    this.initialize();
  }

  async initialize() {
    // this.tracker = {};
    // this.ballOrder = [];
    // this.restart = false;
    this.input = [];
  
    this.report = []; // array of strings to display to user at end, one at a time 
   
    
    await this.inputArr();
    await this.hanldeEachClock(this.input);

  }
  // Store all of the node CLI arguments in an array
  async inputArr (){
    process.argv.shift();// strip off first 2 
    process.argv.shift();
    const result = process.argv.map(function (x) { 
      // force type to numbers to then check 
      return parseInt(x, 10); 
    });
    this.input = result;
    console.log(this.input);
    return this.checkInput(this.input);
  }
  checkInput(x) {
    // likley must be whole numbers no decimals or floats 
    // if 0 end program 
    // handle erros log to user must enter digits 
    return x.every(function (i) {
      return typeof i === "number";
    });

  }
  // handles each clock one at a time
  async hanldeEachClock(succession){
    for(let i = 0 ; i < succession.length; i++){
      await Promise.resolve(this.getCycleInDays(succession[i]));
    }
       
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

  // main function after init and checks
  getCycleInDays (succession){
    
    console.log("here:", succession);
    // return   console.log or txt file if desired -  30 balls cycle after 15 days.

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



