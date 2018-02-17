var quoteText = document.querySelector('section blockquote p');
var newQuote = document.querySelector("button.newQuote");
var HEIGHT = window.innerHeight - 200;

URL = "motivationalMoments.json";

newQuote.onclick = function() {
 var request = new XMLHttpRequest();
 request.open('GET',URL);
 request.send();

 request.onload = function randomJson(){
 	var responseText = JSON.parse(request.responseText);
 	quoteText.textContent = responseText.contents.quotes[0].quote;
 	//console.log(response);
 }
};



