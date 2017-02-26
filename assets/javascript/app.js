$(document).ready(function() {

var QuestionsArray = [
  { name: '1.', image: '../assets/images/vg.jpg' }, 
  { name: '2', image: '../assets/images/monet.jpg' }, 
  { name: '3', image: '../assets/images/picasso.jpg' }
  { name: '4.', image: '../assets/images/caravaggio.jpg'}, 
  { name: '5.', image: '../assets/images/davinci.jpg' }
];
						 
var answerKey = ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Caravaggio", "Leonardo da Vinci"];
var triviaAnswers = [["Pablo Picasso", "Micelangelo", "Lady GaGa", "Salvador Dali"], ["Andy Warhol", "Rembrandt", "Vincent van Gogh", "Leonardo da Vinci"], ["Paul McCartney", "Vincent van Gogh ", "Michael McDonald", "Rembrandt"], ["Claude Monet", "Rembrandt", "Caravaggio","Vincent van Gogh"], ["Andy Warhol", "Rembrandt", "Vincent van Gogh", "Cassie Simonson"]];

var number = 60;
var correctTotal = 0;
var wrongTotal = 0;
var noAnserTotal = 0;
console.log(triviaAnswers[0]);
console.log(triviaAnswers[1]);
console.log(triviaAnswers[0][0]);
console.log(triviaAnswers[0][1]);

var a = $("#radio").val();
console.log(a);

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    $("#start").on("click", start);
    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);
    
    
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