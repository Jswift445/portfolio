// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Getting the main actors on the stage(declaring varibles)
var message = '';
var showedQuotes = [];
var red;
var green;
var blue;

//setting up the name of movie(function print to display in the HTML code)
function print(message) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = message;
}

//setting up the moive set(function to randomly choose a quote and return it)
function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var splicedQuote = quotes.splice(randomQuote, 1)[0];
	showedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = showedQuotes;
		showedQuotes = [];
	}
    console.log(showedQuotes);
	return splicedQuote;
}

//function to change color at random
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

//adding drama(Function of change the background color at random)
function randomColor() {
  var color;
  red = randomRGB();
  green = randomRGB();
  blue = randomRGB();
  color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return color;
}

//End credits(function to print out the message from the function print)
function printQuote() {
   var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message += '<p class="source">' + quotes.source;
    message += '<h3>' + quotes.tag; + '</h3>';
    //putting the moive to show in theater(print the message)
    print(message);
    randomColor();
  document.getElementById('rgb').style.background = randomColor();
}

//setting picture frame(set the setInterval to show the quotes)
setInterval(printQuote, 6000);

