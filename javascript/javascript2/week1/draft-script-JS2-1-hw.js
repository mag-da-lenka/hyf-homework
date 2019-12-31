console.log(`Hello World! Hello Kitty! / Parallel world connection test.`)
console.log(`This is HOMEWORK JS2-1 week-09 by Magdalena /HYF /class 12.`);















// 1. ---> FIND THE SHORTEST WORD  --->  Write a function that finds the shortest word of an array of words -------------------------------------------------------------------------------------------------------

let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
// console.log(danishWords);                // ---> (6) ["bil", "plante", "kaffe", "bog", "ø", "planetarium"]
// console.log(danishWords.length);         // ---> 6
// console.log(danishWords.indexOf('ø'));   // ---> 4
// console.log(danishWords[4]);             // ---> ø
// console.log(danishWords[4].length);      // ---> 1   

function findTheShortestWord(danishWords) {  // returns 'ø'
    for (let i = 0; i < danishWords.length; i++) {
        // console.log(danishWords[i]) 
        if (danishWords[i].length === 1) {
            // return `The shortest Danish word is ${danishWords[i]}.`; //old version -Aleks says: A better practice would be to return the result of the math operation, and not the surrounding output. That part can be done by the caller code.
            return danishWords[i];
        };
    }
}

console.log(findTheShortestWord(danishWords));
console.log('The shortest Danish word is' + ' ' + (findTheShortestWord(danishWords)));
console.log(`The shortest Danish word is ${(findTheShortestWord(danishWords))}`);









// 2. ---> DIFFERENCE BETWEEN MEDIAN AND AVERAGE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Quick math check: 
// console.log((3000000 + 3500000 + 1300000 + 40000000 + 100000000 + 8000000 + 2100000) / 7)     // ---> 22,557,143    // this is average
// console.log(40000000 / 2)                                                                     // ---> 40,000,000    // this is median lvl easy
// console.log((40000000 / 2) + (40000000 / 2 + 1))                                              // ---> 40,000,001    // this is median lvl advanced
// console.log(((40000000 / 2) + (40000000 / 2 + 1)) / 2)                                        // ---> 20,000,000.5  // this is the average of median lvl ease and median lvl addvanced

let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];  // index --> 0 1 2 3 4 5 6 length ---> 7 


// Make a function that takes an array as parameter and returns the average of that parameter 
function getAverage(housePrices) {

    let pricesSum = 0;

    for (let i = 0; i < housePrices.length; i++) {
        pricesSum = pricesSum + housePrices[i];
    }

    // console.log((3000000 + 3500000 + 1300000 + 40000000 + 100000000 + 8000000 + 2100000)) // ---> 157,900,000
    // console.log(pricesSum);                                                               // ---> 157,900,000
    // let averageOldVersion = pricesSum / housePrices.length;                               // ---> 157,900,000 / 7 ---> 22557142.85714286
    let average = Math.round(pricesSum / housePrices.length);                                // ---> 157,900,000 / 7 ---> 22557142
    // return `The averageof the housePrices array is ${average}. ---> the sum of all the prices divided by the number of prices`; 
    return average

}

console.log(getAverage(housePrices)); // ---> 22557142.85714286 
console.log(`The average of the housePrices array is ${(getAverage(housePrices))}. ---> the sum of all the prices divided by the number of prices`)


// Make a function that takes an array as parameter and returns the median of that parameter
function getMedian(housePrices) {

    let middleIndex = Math.floor(housePrices.length / 2);
    // console.log(middleIndex); //---> 4
    let median = housePrices[middleIndex];
    // return `The median of the housePrices array is ${median}.`; // old version
    return median;
}

console.log(getMedian(housePrices)); // ---> 40,000,000
console.log(`The median of the housePrices array is ${getMedian(housePrices)}.`)


// Now create a function that calculates the median and the average and returns these two value in an object. // use the functions on this array
function getAverageAndMedian(housePrices) {

    let objectWithAverageAndMedian = {
        averageKey: getAverage(housePrices), // comma
        medianKey: getMedian(housePrices)   // NO comma
    }

    // return `Here's what objectWithAverageAndMedian says:          // OLD VERSION 
    // 1) ${objectWithAverageAndMedian.averageKey}. 
    // 2) ${objectWithAverageAndMedian.medianKey}`

    return objectWithAverageAndMedian //new version


}

console.log(`Below is what objectWithAverageAndMedian says:`)
console.log(getAverageAndMedian(housePrices)); // ---> {averageKey: 22557143, medianKey: 40000000}

console.log(`Here's what objectWithAverageAndMedian says: ${getAverageAndMedian(housePrices)}`)                // ---> [object Object]
console.log('Here\'s what objectWithAverageAndMedian says:' + ' ' + getAverageAndMedian(housePrices));         // ---> [object Object]


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------










// 3. ---> SPIRIT ANIMAL NAME GENERATOR ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3a: function with a parameter (no connection with html because I couldn't make it work)

let firstWordsX = ["Drunk", "Stoned", "Forrest", "Mortal", "Fluffy", "Cyber", "Hardworking", "Squeeshy", "Martian", "Smart"];
let secondWordsX = ["Koala", "Kitty", "Squirrel", "Fluffling", "Squirrel", "Bunny", "Alpaca", "Hedgehog", "Robot", "Wolf"];
let spiritAnimalX = firstWordsX[Math.floor(Math.random() * firstWordsX.length)] + " " + secondWordsX[Math.floor(Math.random() * secondWordsX.length)];
// Alex: Extract the function generateRandomInteger(length) => and use it here instead of doing everything inline. As discussed in class. // not done

function getSpiritAnimal(name) {
    if (!name) {
        // return `Your name box looks empty. You've typed --->     <--- Please try again. *** Btw the input tested here is: ${name}`; // old version 
        return name;
    }
    else if (typeof (name) === typeof ('somerandomstring')) {
        // return `Hi ${name}. Your spirit animal is ${spiritAnimalX}`; // old version 
        return spiritAnimalX;
    }
    else if (typeof (name) === typeof (666)) {
        // return `Errrrm. Duuude... That is a number. You've typed ---> ${name}... o_O ...srsly? ` // old version 
        return name;
    }
}

console.log(getSpiritAnimal('Benjamin Button'));  // --->  random name
console.log(getSpiritAnimal('Magda'));            // --->  random name 
console.log(`Your name box looks empty. You've typed --->     <--- Please try again. *** Btw the input tested here is: ${getSpiritAnimal('Magda')}`) // ---> random name

console.log(getSpiritAnimal(666));                // --->  666  
console.log(`Errrrm. Duuude... That is a number. You've typed ---> ${getSpiritAnimal(666)}... o_O ...srsly? `)

console.log(getSpiritAnimal());                   // --->  undefined 
console.log(`Your name box looks empty. You've typed --->     <--- Please try again. *** Btw the input tested here is: ${getSpiritAnimal()}`);

console.log(getSpiritAnimal(""));                 // --->  emptiness :) 
console.log(`Your name box looks empty. You've typed --->  ""  <--- Please try again. *** Btw the input tested here is: ${getSpiritAnimal("")}`);

console.log(getSpiritAnimal(null));               // --->  null
console.log(`Your name box looks sad. You've typed --->  null  <--- Please try again. *** Btw the input tested here is: ${getSpiritAnimal(null)}`);









// 3b: function without parameters (connected to html)

function getSpiritAnimalName() {

    let adjectives = ["Drunk", "Stoned", "Forrest", "Mortal", "Fluffy", "Cyber", "Hardworking", "Squeeshy", "Martian", "Smart"];
    let nouns = ["Koala", "Kitty", "Squirrel", "Fluffling", "Squirrel", "Bunny", "Alpaca", "Hedgehog", "Robot", "Wolf"];

    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    // console.log(randomAdjective); console.log(typeof (randomAdjective)); console.log(randomNoun); console.log(typeof (randomNoun)); // test: all good

    let theTypedName = document.getElementById("typedName").value;
    let theNameResult = document.getElementById("result-displayed");

    if (!theTypedName) {
        alert(`Hey, please type something that at least vaguely resembles a human name.`)
    }

    else {
        theNameResult.innerText = `Hey ${theTypedName}! 
        Your spirit animal is ${randomAdjective} ${randomNoun}.`;
        console.log(`Hey ${theTypedName}! Your spirit animal is --->  ${randomAdjective} ${randomNoun}.`)
    }

}

let daButton = document.getElementById("animalize-button");
daButton.addEventListener("click", getSpiritAnimalName);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------










