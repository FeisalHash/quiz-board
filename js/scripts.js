$(document).ready(function() {
  function check(){

  var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

  	if (question1 == "paragraph") {
  		correct++;
  }
  	if (question2 == "=") {
  		correct++;
  }
  	if (question3 == "Document Object Model") {
  		correct++;
  	}

    var messages = ["Great job!", "That's just okay", "You really need to do better"];

    if (correct == 0) {
    		score = 2;
    	}

    	if (correct > 0 && correct < 3) {
    		score = 1;
    	}

    	if (correct == 3) {
    		score = 0;
    	}
      document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[score];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."
}})
