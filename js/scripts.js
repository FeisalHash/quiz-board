$(document).ready(function() {
  $("quiz").check(function(){

  var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

  	if (question1 == "paragraph") {
  		correct+=20;
  }
  	if (question2 == "=") {
  		correct+=20;
  }
  	if (question3 == "Document Object Model") {
  		correct+=20;
  	}
 $("message").
