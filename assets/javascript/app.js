$(document).ready(function(){

    var backImg = "assets/images/frasiercast.jpg";
    var number = 60;
    var score = 0;

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
        if (number < -1){
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

 

    function checkScore(){
       var q1= $(".question-1").elements.value;

       console.log(q1);
    }
    
});