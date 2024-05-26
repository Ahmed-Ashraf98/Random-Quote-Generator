var currentNumber = 0; // initial value
//  30 qoutes
var qoutesList = [
  { qouteTxt: "Be yourself; everyone else is already taken.", qouteAuthor: "Oscar Wilde" },
  { qouteTxt: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", qouteAuthor: "Marilyn Monroe" },
  { qouteTxt: "So many books, so little time.", qouteAuthor: "Frank Zappa" },
  { qouteTxt: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", qouteAuthor: "Albert Einstein" },
  { qouteTxt: "A room without books is like a body without a soul.", qouteAuthor: "Marcus Tullius Cicero" },
  { qouteTxt: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", qouteAuthor: "Bernard M. Baruch" },
  { qouteTxt: "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.", qouteAuthor: "William W. Purkey" },
  { qouteTxt: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", qouteAuthor: "Dr. Seuss" },
  { qouteTxt: "You only live once, but if you do it right, once is enough.", qouteAuthor: "Mae West" },
  { qouteTxt: "Be the change that you wish to see in the world.", qouteAuthor: "Mahatma Gandhi" },
  { qouteTxt: "In three words I can sum up everything I've learned about life: it goes on.", qouteAuthor: "Robert Frost" },
  { qouteTxt: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", qouteAuthor: "J.K. Rowling, Harry Potter and the Goblet of Fire" },
  { qouteTxt: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend", qouteAuthor: "Albert Camus" },
  { qouteTxt: "If you tell the truth, you don't have to remember anything.", qouteAuthor: "Mark Twain" },
  { qouteTxt: "Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .", qouteAuthor: "C.S. Lewis, The Four Loves" },
  { qouteTxt: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", qouteAuthor: "Maya Angelou" },
  { qouteTxt: "A friend is someone who knows all about you and still loves you.", qouteAuthor: "Elbert Hubbard" },
  { qouteTxt: "To live is the rarest thing in the world. Most people exist, that is all.", qouteAuthor: "Oscar Wilde" },
  { qouteTxt: "Always forgive your enemies; nothing annoys them so much.", qouteAuthor: "Oscar Wilde" },
  { qouteTxt: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", qouteAuthor: "Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches" },
  { qouteTxt: "Live as if you were to die tomorrow. Learn as if you were to live forever.", qouteAuthor: "Mahatma Gandhi" },
  { qouteTxt: "We accept the love we think we deserve.", qouteAuthor: "Stephen Chbosky, The Perks of Being a Wallflower" },
  { qouteTxt: "Without music, life would be a mistake.", qouteAuthor: "Friedrich Nietzsche, Twilight of the Idols" },
  { qouteTxt: "I am so clever that sometimes I don't understand a single word of what I am saying.", qouteAuthor: "Oscar Wilde, The Happy Prince and Other Stories" },
  { qouteTxt: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", qouteAuthor: "Ralph Waldo Emerson" },
  { qouteTxt: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.", qouteAuthor: "Steve Jobs" },
  { qouteTxt: "Insanity is doing the same thing, over and over again, but expecting different results.", qouteAuthor: "Narcotics Anonymous" },
  { qouteTxt: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.", qouteAuthor: "Marilyn Monroe" },
  { qouteTxt: "It is better to be hated for what you are than to be loved for what you are not.", qouteAuthor: "Andre Gide, Autumn Leaves" },
  { qouteTxt: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", qouteAuthor: "H. Jackson Brown Jr., P.S. I Love You" }
]

function generateQuotes() {

  var number = generateRandomNum();
  console.log("--------------------------------------")
  console.log("Current Number is: ", currentNumber)
  console.log("Generated Number is: ", number)
  console.log("--------------------------------------")
  while (isEqual(currentNumber, number)) {
    console.log("Going to re-generate ......")
    number = generateRandomNum();
  }
  currentNumber = number; // Now current number updated with new one
  console.log("==============> Result : ",number)

  // -------------- [ Find The Object At index == number ] -------------

  var qouteObj = qoutesList.at(number);
  var htmlBox = `
  <blockquote class="quote-box mt-5 position-relative">
    <i class="top-quote-icon position-absolute fa-solid fa-quote-left"></i>
    <i class="bottom-quote-icon position-absolute fa-solid fa-quote-left"></i>
    <p><q>${qouteObj.qouteTxt}</q></p>
    <p>&mdash; <cite class="fs-6">${qouteObj.qouteAuthor}</cite></p>
  </blockquote>
  `;

  document.getElementById("quotesData").innerHTML = htmlBox;

}


function generateRandomNum() {
  // returns a random integer between 0 and Qoutes List length 
  /*
  Notes :
   ===> It will genrate from 0 to qoutesList.length and last number will be exculded
   ===> We don't the exact qoutesList length number because our list index start from 0 to qoutesList.length-1
   ===> We use Math.floor to get an integer instead of float number
   */

  return Math.floor(Math.random() * (qoutesList.length));
}


function isEqual(currentNum, newNum) {
  // This function will return true if the current number and the new generated number are equal otherwise will return false
  // This function will help us to avoid printing the same qoute in 2 consecutive print 
  if (currentNum == newNum) {
    return true;
  }
  return false;
}