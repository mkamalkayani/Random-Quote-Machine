var quoteText = document.querySelector('section blockquote p');
var newQuote = document.querySelector("button.newQuote");
var HEIGHT = window.innerHeight - 200;

var category = ["Love", "Patience", "Hope", "Good Character"];

var min = 0;
var max = 3;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

URL = "motivationalMoments.json";

newQuote.onclick = function() {
 var request = new XMLHttpRequest();
 request.open('GET',URL);
 request.send();

 request.onload = function (){
 	var responseText = request.responseText;
 	//quoteText.textContent = responseText.Love[0].quote;
 	console.log(request);
 }
};



