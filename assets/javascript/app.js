$(document).ready(function(){



//pre-game start screen
//assigned DOM elements
//function to initiate game
//timer to indicate time remaining

//questions for user to answer
//display of answers and final score

console.log("Hello World");

setTimeout(fiveSeconds, 1000 * 30);
setTimeout(timeUp, 1000 * 90);


function fiveSeconds() {
    $("#time-left").append("<p>5 seconds left</p>");
    console.log("5 seconds left");
}

function timeUp() {
    console.log("done");
}



});