$(document).ready(function(){

    var backImg = "assets/images/frasiercast.jpg";
    var number = 60;
    var correctAnswer = [2, 0, 3, 3, 4];
    var score = 0;

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

       //displays time remaining to answer questions
       function timer(){
        setTimeout(timer, 1000);
        $(".timer").html("Time Remaining " + number);
        number--;

        //game logic
        if (number == 0){
            number = 0;
            $(".submit").hide();
            $(".questions").hide();
            $(".timer").hide();
            $(".results").show();
            }
    };

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

 

    function checkScore(){
        var question1 = document.content.questions.question1.value
        var question2 = document.content.questions.question2.value
        var question3 = document.content.questions.question3.value
        var question4 = document.content.questions.question4.value
        var question5 = document.content.questions.question5.value

        if (question1 == "Q12"){
            score++
        }
        if (question2 === "Q1"){
            score++
        }
        if ("question-three" == correctAnswer){
            score++
        }
        if (".question-four" === correctAnswer){
            score++
        }
        if (".question-five" === correctAnswer){
            score++
        }
        $(".results").html("Your Score" + score);
        console.log( question1);
    }
    
});