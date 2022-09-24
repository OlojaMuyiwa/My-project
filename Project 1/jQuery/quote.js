// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: "Journalism largely consists of saying 'Lord Jones is Dead' to people who never knew that Lord Jones was alive.",
    person: "G.K Gesterson"
  },
  {
    quote: "We can aspire to anything, but we don't get it just 'cause we want it. I would rather spend my life close to the birds than waste it wishing I had wings.",
    person: "Ellie Attie"
  },
  {
    quote: '"Consistency beats Priviledge"',
    person: "Oloja Muyiwa"
  },
  {
    quote: "There's no such thing as quitting. Just sometimes there's a longer pause between relapses",
    person: "Alan Moore"
  },
  {
    quote: '"We hope that, when the insects take over the world, they will remember with gratitude how we took them along on all our picnics."',
    person: "Bill Vaughan"
  },
  {
    quote: '"For all their strength, men were sometimes like little children."',
    person: "Lawana BlackWell"
  },
  {
    quote: '"Act as if it were impossible to fail"',
    person: "Dorathea Brande"
  },
  {
    quote: "If you look at what you have in life,you'll always have more,if you look at what you don't have you'll never have enough",
    person: "Oprah Winfrey"
  },
  {
    quote: '"I do the best i know, the very best i can, and i mean to keep doing so untill the end"',
    person: "Abraham Lincoln"
  },
  {
    quote: '"Our lives come to end the day we become silent about things that matter"',
    person: "Martin Luther King Jr"
  },
  {
    quote: '"At the best,man is the noblest of all animels,seperated from law and justice is the worst"',
    person: "Aristotle"
  }
];

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})