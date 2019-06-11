/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
// My variable was created as "quotes" and inside an array of Objects with the quote(5) and source as properties
var quotes = [
  {
    quote: 'Attitudes are more important than facts', 
    source: 'George MacDonald',
    type: ', Positivity'
  },
  {
    quote:'I will not take "But" for an answer', 
    source:'Langston Hughes',
    type: ', Literature'
  }, 
  {
    quote:'Your aspirations are your possibilities',
    source:'Samuel Johnson',
    type: ', Mindset'
  }, 
  {
    quote:'Do unto others as you would have them do unto you',
    source:'God',
    citation: 'King James Version ',
    year: "BC", 
    type: ', Biblical'
  }, 
  {
    quote:'Attitude will always define who we are in life',
    source:'Mark A. Brennan',
    type: ', Insight'
  }
];

console.log(quotes);    //consonle.log created to print quotes to page.
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - use the random number to `return` a random quote object from the `quotes` array.
***/
   // getRandomQuote function selects and returns a random quote object
function getRandomQuote() {      
    var quoteIndex = Math.floor(Math.random() * quotes.length); 
  return quotes[quoteIndex];  
}                                     

console.log(getRandomQuote());    //this console.log created to print the getRandomQuote feature to the page.
/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
//printQuote function was created for the webpge to show my randomQuote & if result lines created for citation, year, and type objects.
function printQuote()
{
var sayMessage = "";
var result = getRandomQuote(quotes);
sayMessage +="<p class='quote'>" + result.quote+ "</p>";
sayMessage +="<p class='source'>" + result.source;
if (result.citation) {
  sayMessage +="<span class='citation'>" + result.citation +"</span>"
}
if (result.year) {
  sayMessage +="<span class='year'>" + result.year + "</span>"
}

if (result.type) {
  sayMessage +="<span class='type'>" + result.type + "</span>"
}
  sayMessage += "</p>";
  document.getElementById('quote-box').innerHTML= sayMessage;

  function random_bg_color() {                                  //the funtion random bgColor created to randomly change the colors (red, green, blue assigned as x, y, z)
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor =  "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;                 //the document body page displays the changing colors in the background created from bgColor variable.

  }
  random_bg_color();
//the setInterval is designed to change the color automatically every 10 seconds.
  setInterval(function(){                                    
    printQuote();
 }, 10000);

 //console.log(printQuote());

}
printQuote();
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/




// Remember to delete the comments that came with this file, and replace them with your own code comments.