// These indicators display the time between 1:00 and 12:59,


// Thus 2 balls in the minute indicator, 6 balls in the five-minute 
// indicator and 5 balls in the hour indicator displays the time 5:32.


class Indicator{
    // dsiplays minutes, five-minutes and hours

    // hold 4 balls at a time 
    constructor(ball, trackPosition) {
        this.timeRepresentation = 1 //one o'clock when all the clocks start.
        this.ball = ball;
        this.trackPostion = trackPosition;
        this.visited = false;
        this.done = false;
        this.minuteIndicatortrack = 5;
        this.fiveMinuteIndicatortrack = 11; // holds 11 balls 
        this.hourIndicator = 11; // holds 11 balls plus 1 fixed ..
        //so that counting the balls in the hour indicator will yield 
        //an hour in the range one to twelve.
    }

    tilt(whatIndicator, trackPosition) {
        // when 5th ball rolls in all 4 roll to back of queue 

        // 12 ball cause tilt 

     // roll to bottom in reverse order of their original addition to the minutes track


     // The twelfth ball carried over from the five-minute indicator 
    //  causes the hour indicator to tilt, returning the eleven free balls 
    //  to the queue, in reverse order,before the twelfth ball itself also 
    //  returns to the queue.
    }

}

module.exports = Indicator;
