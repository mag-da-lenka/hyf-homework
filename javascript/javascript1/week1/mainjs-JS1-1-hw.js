//HOMEWORK JS1-1 week-05 by Magdalena /HYF /class 12

console.log("Hello World!"); //parallel world connection test :) 



//Step 1 and 2 = done. My username on Codecamp is mag-da-lena.





// Step 3.1 Age-ify (A future age calculator) 
//Create two variables called yearOfBirth and yearFuture. Assign these your own age and a future year. 
//The logic behind: my year of birth could be const, but I might like to check sb else's age later. Hence var, not const. Let would also be ok here.  
var yearOfBirth = 1980; 
var yearFuture = 2047;
//What type will these two variables be? ---> Both are numbers, here's the proof: 
console.log(typeof yearFuture); 
console.log(typeof yearOfBirth); 
//Now calculate the age and store that in a variable called age. 
var age = yearFuture - yearOfBirth;
//Log out this string: "You will be 40 years old in 2027". //I customized it of course. 
console.log("You, the one born in " + yearOfBirth + ", will be " + age + " years old in " +  yearFuture + "." + " Btw, omg.");





// Step 3.2 Goodboy-Oldboy (A future age calculator for fluffy friends) 
//Like before lets create three variables but this time we call them dogYearOfBirth, dogYearFuture and dogYear. 
//I hope it's ok to create another one for human way of calculating dog age, even though it won't be displayed after the console.log 
//...unless we change the Boolean into false, of course!  
let dogYearOfBirth = 2011; 
let dogYearFuture = 2045;
let dogYearCalculation = (dogYearFuture - dogYearOfBirth) * 5; //*5 or really anthing to get a different result than humanYearCalculation :)
let humanYearCalculation = (dogYearFuture - dogYearOfBirth); //our standard human way of counting the years :)
//We add an extra variable called shouldShowResultInDogYears. 
const shouldShowResultInDogYears = true; ///What do we call this type of variable? ---> a Boolean 
//If it(the variable above) is true, we should show the result in dog years, if it is false, we should show it in human years. 
if (shouldShowResultInDogYears) {dogYearCalculation;} else {humanYearCalculation;} 
//Now log this string out: "Your dog will be 10 human years old in 2027" or "Your dog will be 70 dog years old in 2027"
if(shouldShowResultInDogYears) {console.log("Your dog will be " + dogYearCalculation + " dog years old in " + dogYearFuture + ".");} 
else {console.log("Your dog will be " + humanYearCalculation + " human years old in " + dogYearFuture + ".")};
//The logic is here, I hope, but I need to work on my typo and syntax issues in order not to be slowed down :>







// Step 3.3 Housey Pricey (A house price calculator) 
//Two of your friends are considering buying a house, but cannot figure out what the right price should be. 
//Your friends know the width, the height and the depth of the house and the garden size. Lets help them figure out if they paid too much:
//We have made our own formula for calculating the price of a house. This formula is VERY simplified and not at all close to the real calculation which can get quite complicated:
//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

//Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 
let volumeInMetersPeter = 8 * 10 * 10;
let gardenSizeInM2Peter = 100; 
let housePricePeterIs = 2500000;
let housePricePeterShouldBe = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;  
//THIS IS GOLD: https://www.w3schools.com/js/js_if_else.asp 
//     if (condition1) {block of code to be executed if condition1 is true} 
//else if (condition2) {block of code to be executed if condition1 is false and condition2 is true} 
//                else {block of code to be executed if condition1 is false and condition2 is false}
//Let's calculate that for Peter: 
       if (housePricePeterIs > housePricePeterShouldBe) {  console.log("Dude, the're trying to rip you off!!! The price should be " + housePricePeterShouldBe + " tops!!!");  } 
  else if (housePricePeterIs = housePricePeterShouldBe) {  console.log("Good price, Peter. Go for it!");  } 
                                                   else {  console.log("Dude, get it before they realize they're literally giving it away lolz");   }
//Julia is considering a house that is 5m wide, 11m deep and  8m high. The garden size is 70m2. This house costs 1.000.000.
let volumeInMetersJulia = 5 * 11 * 8; 
let gardenSizeInM2Julia = 70; 
let housePriceJuliaIs = 1000000; 
let housePriceJuliaShouldBe = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300; 
//Let's see how that works for Julia:
if (housePriceJuliaIs > housePriceJuliaShouldBe) {  console.log("Dudess, the're trying to rip you off!!! The price should be " + housePriceJuliaShouldBe + " tops!!!");  } 
else if (housePriceJuliaIs = housePriceJuliaShouldBe) {  console.log("Good price, Julia. Go for it!");  } 
                                                 else {  console.log("Dudess, get it before they realize they're literally giving it away lolz");   }

//Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above. 
// ---> so Julia is getting a good price and Peter is about to overpay, unless he wakes up! 



// Step 3.4 Ez Namey (Startup name generator) ***
//At a meetup you overhear a conversation between two developers. (...) Lets help people who struggle finding a startup name by creating some code!
//Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. (...)
let firstWords = ["Drunk", "Stoned", "High", "Heavy", "Fluffy", "Lazy", "Hardworking", "Squeeshy", "Silly", "Smart"];
let secondWords = ["Elephant", "Hippie", "Society", "Metal", "Squirrel", "Cat", "Alpaca", "Kid", "Angel", "Devil"]; 

//Create a variable called startupName that will contain created startup name. //I choose to use the random index hint. Code inspiration: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/  
let startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + " " + secondWords[Math.floor(Math.random() * secondWords.length)]; 

//Using a random index of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it.
//An example could be: "The startup: "Easy Corporation" contains 16 characters" 
console.log("The silly name of the startup is: \"" + startupName + "\" and it has " + startupName.length + " characters.");