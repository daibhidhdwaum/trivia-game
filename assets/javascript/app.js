$(document).ready(function(){

    var backImg = "assets/images/frasiercast.jpg "
    var number = 5;
    var correctAnswer = 0;

    //ran out of time to figure out how to make this functional

/*    var questionairre = [{
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
]*/

    //assigned DOM elements
    //sets events
    //click button to start quiz
    startButton = $("<button>");
    $(".content").append(startButton);
    startButton.attr({
        "type": "button",
        "class": "btn",
    });
    
    $(".btn").text("Play");

    //sets background image on opening page
    backgroundImage = $("<img>");
    $("#background").append(backgroundImage);
    backgroundImage.attr({
        "src": backImg,
        "class": 'cast-img',
    });

    
    /*questionArray = $("<div>");
    $(".content").append(questionArray);
    questionArray.attr({
        "class": "questions",
    });*/
    
    $(".questions").hide();

    //submit answers and receive results
    submitButton = $("<button>");
    $(".content").append(submitButton);
    submitButton.attr({
        "type": "button",
        "class": "submit",
    });
    $(".submit").text("Submit");
    $(".submit").hide();

    results = $("<div>");
    $(".content").append(results);
    results.attr({
        "class": "results",
    });
    $(".results").hide();
    $(".results").html("<h3>Results</h3>");
    $(".results").html("<p>Your Score: </p>");

    //start game on click event
    $(".btn").on("click", function(){
        timer();
        $(".cast-img").hide();
        $("#background").hide();
        $(".btn").hide();
        $(".results").hide();
        $(".questions").show();
        $(".submit").show();
    });
    
    //display of answers and final score
    $(".submit").on("click", function(){
        $(".results").show();
        $(".questions").hide();
        $(".submit").hide();
        $(".timer").hide();
    });

    /*function startQuiz() {
        for(var i = 0; i < questionairre.length; i++){
            $(".question").html(questionairre.question);
        }   console.log(questionairre.question); 
    }*/

    //displays time remaining to answer questions
    function timer(){
        setTimeout(timer, 1000);
        $(".timer").html("Time Remaining " + number);
        number--;

        //game logic
        if (number < 0){
            number = 0;
            $(".submit").hide();
            $(".questions").hide();
            $(".timer").hide();
            $(".results").show();
            }
    };

});