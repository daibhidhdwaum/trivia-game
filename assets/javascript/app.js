$(document).ready(function(){

    var backImg = "assets/images/frasiercast.jpg "
    var number = 5;
    var correctAnswer = 0;
    var questionairre = [{
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

    //sets background image on opening page
    backgroundImage = $("<img>");
    $("#background").append(backgroundImage);
    backgroundImage.attr({
        "src": backImg,
        "class": 'cast-img',
    });

    //click button to start quiz
    startButton = $("<button>");
    $(".content").append(startButton);
    startButton.attr({
        "type": "button",
        "class": "btn",
    });

    $(".btn").text("Play");


    questionArray = $("<div>");
    $(".content").append(questionArray);
    questionArray.attr({
        "class": "questions",
    });

    //displays time remaining to answer questions
    function timer(){
        setTimeout(timer, 1000);
        $(".timer").html("Time Remaining " + number);
        number--;

        if (number < 0){
            number = 0;
        }
        console.log("endgame");
    };

timer();

//pre-game start screen
//function to initiate game
//questions for user to answer
//display of answers and final score
//assigned DOM elements



});