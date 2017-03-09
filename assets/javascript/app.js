$(document).ready(function() {

var triviaArray = [{
    name: "Mark Bradford",
    description: "<strong>Mark Bradford</strong> created this piece in 2015.  He used torn pieces of paper, shellac, and oil on canvas.",
    title: "Let's Walk to the Middle of the Ocean",
    img: "assets/images/mb.jpg",
    choices: ["Jackson Pollack", "Georgia O'Keefe", "Pablo Picasso", "Mark Bradford"]
  },
  {
    name: "Vincent Van Gogh",
    description: "<strong>Vincent Van Gogh</strong> created this piece in 1889.  He used oil on canvas.",
    title: "Starry Night",
    img: "assets/images/vg.jpg",
    choices: ["Jackson Pollack", "Georgia O'Keefe", "Pablo Picasso", "Vincent Van Gogh"]
  },
  {
    name: "Jackson Pollack",
    description: "<strong>Jackson Pollock</strong> created this piece in 1950.  He used oil, enamel, and aluminum on canvas.",
    title: "Number One",
    img: "assets/images/jp.jpg",
    choices: ["Vincent Van Gogh", "Georgia O'Keefe", "Pablo Picasso", "Jackson Pollack"]
  }
]

var originalTriviaArrayLength = triviaArray.length

var targetArtist; //I declare targetArtist as a global variable because I use it in multiple functions

var artistIndex; //same here

var wins = 0;

var paintings = 1;

var number = 10; //for timer

var counter;

var unanswered = 0;

function questionTimer(){
  counter = setInterval(decrement, 1000);
}

function stop(){
  clearInterval(counter);
}

function decrement(){
  number--;
  $('#timer').html("<p><strong>" + number + " seconds left</strong></p>");
  if(number === 0){
    stop();
    triviaArray.splice(artistIndex, 1);
    unanswered++;
    $("#instructions").html("<p>You've run out of time!</p>");
    $("#timer").empty();
    $("#answerChoices").html("<p class='options'>" + targetArtist.description + "</p>");
    $("#eventButton").html("<button class='button'>Next piece</button>")
    if(triviaArray.length === 0){
      empty();
      $("#instructions").html("You answered " + wins + " out of " + originalTriviaArrayLength + " correctly!")
    }
  }
}

function populateQuestion(){
  targetArtist = triviaArray[Math.floor(Math.random()*triviaArray.length)];
  artistIndex = triviaArray.indexOf(targetArtist); //the splice method called later needs two numbers, so i need to store the numerical index value of targetArtist
  //populate instructions/disply
  $("#paintingsLeft").html(paintings + "/" + originalTriviaArrayLength + " peices.")
  $("#instructions").html("<p id='title'>" + targetArtist.title + "</p>");
  $("#image").html("<p><img class=artImage src='" + targetArtist.img + "'></p>");
  //reset timer
  number = 10;
  //start timer
  questionTimer();
  //display timer
  for (var i = 0; i < targetArtist.choices.length; i++){
    $("#answerChoices").append("<p class='choices'>" + targetArtist.choices[i] + "</p>");
  }
  paintings++;
}

function empty(){
  $("#instructions").empty();
  $("#image").empty();
  $("#answerChoices").empty();
  $("#timer").empty();
  $("#eventButton").empty();
  $("#scoreButton").empty();
}

function checkAnswer(){
  $(".choices").on('click', function(){
    var guessedName = $(this).text();
    triviaArray.splice(artistIndex, 1); //removes artist so no duplicates
    stop();
    if(triviaArray.length > 0){
      if (guessedName === targetArtist.name){
        wins++;
        $("#instructions").html("<p>Correct!</p>");
        $("#timer").empty();
        $("#answerChoices").html("<p>" + targetArtist.description + "</p>");
        $("#eventButton").html("<button class='button'>Next piece</button>");
      }
      else{
        $("#instructions").html("<p>Incorrect!</p>");
        $("#timer").empty();
        $("#answerChoices").html("<p>" + targetArtist.description + "</p>");
        $("#eventButton").html("<button id='nextButton' class='button'>Next piece</button>");
      }
    }
    
    if(triviaArray.length === 0){
      if (guessedName === targetArtist.name){
        wins++;
        $("#instructions").html("<p>Correct!</p>");
        $("#timer").empty();
        $("#answerChoices").html("<p>" + targetArtist.description + "</p>");
        $("#eventButton").html("<button class='button'>See your score</button>");
      }
      else{
        $("#instructions").html("<p>Incorrect!</p>");
        $("#timer").empty();
        $("#answerChoices").html("<p>" + targetArtist.description + "</p>");
        $("#scoreButton").html("<button id='nextButton' class='button'>See your score</button>");
      }
    }
  });
}

$(document).ready(function(){
  $("#startButton").on('click', function(){
    populateQuestion();
    checkAnswer();
  });

  $("#eventButton").on('click', function(){
    empty();
    populateQuestion();
    checkAnswer();
  });
  
  $("#scoreButton").on('click', function(){
    empty();
    $("#paintingsLeft").empty();
    $("#instructions").html("You answered " + wins + " out of " + originalTriviaArrayLength + " correctly!<br><p>You left " + unanswered + " unanswered.")
  });

});
var number = 60;
var correctTotal = 0;
var wrongTotal = 0;
var noAnserTotal = 0;


var a = $("#radio").val();
console.log(a);

  
    //  the "run" function
    var intervalId;
    $("#start").on("click", Start);
    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", Stop);
    
    
    function start()
    {
		$("#start").hide();
		run();
		displayQuestions();
		$("#stop").append($('<input type="button" value="STOP">'));
	
	}
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #timeRemaining tag.
      $("#timeRemaining").html("<h2>Time Remaining: " + number + " seconds</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      $("#stop").hide();
      $("#timeRemaining").hide();
      $("#questions").html("<br><h2>ALL DONE! </h2>" );
      $("#message").html("Correct Answers: " + correctTotal + "<br>" );
      $("#message").append("<br>Incorrect Answers: " + wrongTotal + "<br>" );
      $("#message").append("<br>Unanswered: " + noAnserTotal + "<br>" );
    }
    function displayQuestions()
{
console.log(a);
 for (var i = 0; i < QuestionsArray.length; i++) 
 	{

   		
   		console.log(QuestionsArray.length);
   		// For each iteration, I will ceate a paragraph
   		var writeQuestion = $("<br><p>" + QuestionsArray[i] + "</p><br>");

  	 	// First each <p> will be given the class ".question-style".
   		// This is so I can apply styles
   		writeQuestion.addClass("question-style");
		// Each <p> will be given a data attribute called data-quesionValue.
   		// This data attribute will be set equal to the answers in the triviaAnswers array.
   		writeQuestion.attr("data-questionvalue", answerKey[i]);

   		//  each <p> (with all it classes and attributes) will get added to the page.
   		$("#questions").append(writeQuestion + QuestionsArray[i] + "<br>");
   		//$("#questions").append(writeQuestion);
   		//console.log("the answer for the question is " + data-questionvalue);
   		for(var j=0; j<triviaAnswers[i].length; j++)
   			{
   				$("#questions").append("   <input type='radio' class= 'radio-inline' name='answers"+[i]+"' value='" + triviaAnswers[i][j]+"'>   "+ triviaAnswers[i][j] + "      ");
   				//console.log($(input.val));
   				//var setValue = setValue.attr("data-answervalue", triviaAnswers[i][j])
   				console.log(a);

   			}
   		//$("#questions").append("<br>" + "<input type='radio' >"+ triviaAnswers[i] + "<br>");
   		//console.log(this.writeQuestion);
   		console.log(writeQuestion);
   		//checkAnswers();
   		
	}
	$(".radio").on("click", checkAnswers);
}
    
    function checkAnswers(){
    //	event.preventDefault();

    	userInput = $(".radio").val();
    	console.log(userInput);
    }
    
});  //  Closes jQuery wrapper