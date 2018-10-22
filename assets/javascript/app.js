$(document).ready(function(){

    var backImg = "assets/images/frasiercast.jpg "
    var correctAnswer = 0;
    var questions = [{
        question: "What song does Frasier sing on his PBS fundraising appearance?",
        answers: ["Three Little Maids", "an aria", "Buttons and Bows", "Tossed Salad and Scrambled Eggs"],
        correctAnswer: 2
    },
    {
        question: "Whose show follows Frasier's on the radio?",
        answers: ["Bulldog", "Gil Chesteron", "Father Mike", "Amber Edwards"],
        correctAnswer: 0
        },
    {
        question: "What is the name of the radio station Frasier works for?",
        answers: ["ACKL", "AKCL", "KCAL", "KACL"],
        correctAnswer: 3
    },
    {
        question: "Which Cheers co-star did not appear on Frasier?",
        answers: ["Cliff Claven(John Ratzenberger)", "Sam Malone(Ted Danson)", "Diane Chambers(Shelly Long)", "Rebecca Howe,(Kirsty Alley)"],
        correctAnswer: 3
    }
    ]  

    backgroundImage = $("<img>");
    $("#background").append(backgroundImage);
    backgroundImage.attr({
        "src": backImg,
        "class": 'cast-img',
    });

    startButton = $("<button>");
    $(".content").append(startButton);
    startButton.attr({
        "type": "button",
        "class": "btn",
    });

    $(".btn").text("Play");

//pre-game start screen
//function to initiate game
//questions for user to answer
//display of answers and final score
//assigned DOM elements

/*var time = 0;

function start(){
    intervalId = setInterval(count, 1000);
}

function count(){
    time--;
    var converted = timeConverter(time);
    $("display").text(converted);
}console.log(count);

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    if (minutes === 0) {
         minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    return minutes + ":" + seconds;
    }

    start();*/

});