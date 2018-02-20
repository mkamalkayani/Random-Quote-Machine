var quoteText = document.querySelector('blockquote p');
var quoteAuthor = document.querySelector('.blockquote-footer')
var newQuote = document.querySelector("button.newQuote");
//var HEIGHT = window.innerHeight - 200;

var category = ["Love", "Patience", "Hope", "Good Character"];
function randomNumber(min=0, max=3){
		var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumber;
 	}

URL = "motivationalMoments.json";

function newRequest() {
 var request = new XMLHttpRequest();
 request.open('GET',URL);
 request.send();

 request.onload = function (){
 	var responseText = JSON.parse(request.responseText);
 	var randomCategory = responseText[category[randomNumber()]];
 	var randomQuote = randomCategory[randomNumber(min=0, max=randomCategory.length-1)];
 	
 	if (quoteText.textContent !== randomQuote.quote) {
 		quoteText.textContent = randomQuote.quote;
 		quoteAuthor.textContent = randomQuote.author;
	}
 	else { 
 		newRequest();
 	}
 }
}

window.onload = newRequest();
newQuote.onclick = function() { newRequest() };




