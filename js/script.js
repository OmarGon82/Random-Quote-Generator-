/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
//created an array of objects. Each object has 5 properties. The array contains 10 objects.
var quotes = [
  {
    quote: 'The key to parenting is don’t overthink it. Because overthinking leads to...what were talking about?',
    source: 'Granmpa Simpson',
    year: 1994,
    citation: 'Grampa Vs. Sexual Inadequacy',
    category: 'Family'
  },
  {
    quote: 'Well, it’s 1 AM. Better go home and spend some quality time with the kids.',
    source: 'Homer Simpson',
    year: 1997,
    citation: 'The Springfield Files',
    category: 'Family'
  },
  {
    quote: 'Marriage is like a coffin, and each kid is another nail.',
    source: 'Homer Simpson',
    year : 2002,
    citation: 'How I Spent My Strummer Vacation',
    category: 'Marriage'
  },
  {
    quote: 'Our differences are only skin deep, but our sames go down to the bone.',
    source: 'Marge Simpson',
    year: 1997,
    citation: 'The Mysterious Voyage of Homer',
    category: 'Marriage'
  },
  {
    quote: 'You don’t win friends with salad.',
    source: 'Homer, Bart, and Marge',
    year: 1995,
    citation: 'Lisa the Vegetarian',
    category: 'Friedship'

  },
  {
    quote: 'No way, Bart. If I lean over, I leave myself open to wedgies, wet willies, or even the dreaded rear-admiral!',
    source: 'Millhouse',
    year: 1993,
    citation: 'Treehouse of Horror IV',
    category: 'Friendship'
  },
  {
    quote: 'Most of you will never fall in love, and marry out of fear of dying alone.',
    source: 'Edna Krabappel',
    year: 1992,
    citation: 'Bart\'s Friend Falls in Love',
    category: 'Love'
  },
  {
    quote: 'Step aside everyone! Sensitive love letters are my specialty.\'Dear Baby, Welcome to Dumpsville. Population: you.',
    source: 'Homer Simpson',
    year: 1992,
    citation: 'Bart the Lover',
    category: 'Love'
  },
  {
    quote: 'Son when you participate in sport events- its not whether you win or lose, it\'s how drunk you get',
    source: 'Homer Simpson',
    year: 1994,
    citation: 'Bart Gets an Elephant',
    category: 'Sports'
  },
  {
    quote: 'Come on, Bart! Remember what Vince Lombardi said: \'If you lose, you\'re out of the family!',
    source: 'Homer Simpson',
    year: 1990,
    citation: 'Dead Putting Society',
    category: 'Sports'
  }
]


//created the function getRandomQuote ()
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length) // created a var named randomNum to hold the number generate by the Math.floor function
  return quotes[randomNum]; //returns the quotes array index for the random number ex quotes[5] 5 being the random number generated. (5 would be the Millhouse quote)
}

//created the printQuote function
function printQuote(){
  randQuote = getRandomQuote(); //created a variable to hold and call the getRandomQuote function
  message = '' //created a varible message to hold and empty string so I can build my output message.
  message += '<p class="quote">' + randQuote.quote + '</p>';//added to the message variable and accessed the quote from the random quote generated. I used dot notation
  message += '<p class="source">'  + randQuote.source;//accessed the source from the quote object using dot notation.
  /* for this section I used a conditional statement to check if the citation, year and category properties existed in the random object generated.
  if they exist or if the statment is true then update the message variable. If it's not to then the code doesn't run.
  */
  if  (randQuote.citation) {
    message += '<span class="citation">' + randQuote.citation+ '</span>';
  }
  if (randQuote.year) {
  message += '<span class="year">' + randQuote.year + '</span>';
  }
  if (randQuote.category) {
    message += '<span class="category">' + randQuote.category + '</span>';
  }
  message += '</p>' //close off the <p> tag that was opened when I added the .source property
  return  document.getElementById("quote-box").innerHTML = message; //finally return the message so that it works when the button is clicked.
  }
// I https://www.w3schools.com/jsref/met_win_setinterval.asp to help me with this function.
var quoteInterval = setInterval(printQuote, 5000 );//created a variable for and it to hold the setInterval function and refernce the printQuote function


//I used the same function we learned on loops video 8 challenge 2 to create a random number
function randomHex() {
// I decided to use until 500 because the lower numbers seem to give darker colors. I didn't want light colors to make the text difficult to read.
  return Math.floor(Math.random() * 500); 
 }
 // I modified the function from loops video 8 challenge 2 to return a single random color
 function randomColor() {
  var color = '#'
  color += randomHex();
  return document.getElementById("color").style.backgroundColor = color;
}
 
// with help from this source: https://www.w3schools.com/jsref/prop_html_style.asp 
//I made a variable to hold the setInterval function and referenced the randomColor function
var colorInterval = setInterval(randomColor, 5000 );



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
 


