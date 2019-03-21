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


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   -use the random number to `return` a random quote object from the `quotes` array.
***/




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




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.