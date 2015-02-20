var upper = 10000000000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts =0;



function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

//loop

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
    
}

document.write("<p> The Random number was: " + randomNumber +"</p>");
document.write("<p> It took the computer: " + attempts + " times to guess the number!</p>");