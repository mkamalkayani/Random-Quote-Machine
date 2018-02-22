var quoteText = document.querySelector('blockquote p');
var quoteAuthor = document.querySelector('.blockquote-footer')
var newQuote = document.querySelector(".newQuote button");

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

 	var twitterHrefURL = "https://twitter.com/intent/tweet?text=" + quoteText.textContent + "&hashtags=" + quoteAuthor.textContent; 
 	var twitterLinkElement = document.querySelector("div.twitter-share-button a");
	twitterLinkElement.setAttribute("href",twitterHrefURL);
 }
}

newQuote.onclick = newRequest;
window.onload = newRequest();
