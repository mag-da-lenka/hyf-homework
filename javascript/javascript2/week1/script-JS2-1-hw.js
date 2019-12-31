console.log(`Hello World! Hello Kitty! / Parallel world connection test.`)
console.log(`This is HOMEWORK JS2-1 week-09 by Magdalena /HYF /class 12.`);





// 1. ---> FIND THE SHORTEST WORD  --->  Write a function that finds the shortest word of an array of words -------------------------------------------------------------------------------------------------------

let danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findTheShortestWord(danishWords) {
    for (let i = 0; i < danishWords.length; i++) {

        if (danishWords[i].length === 1) {
            return danishWords[i];
        };
    }
}

console.log(findTheShortestWord(danishWords));





// 2. ---> DIFFERENCE BETWEEN MEDIAN AND AVERAGE ---------------------------------------------------------------------------------------------------------------------------------------------------------------

let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function getAverage(housePrices) {

    let pricesSum = 0;

    for (let i = 0; i < housePrices.length; i++) {
        pricesSum = pricesSum + housePrices[i];
    }

    let average = Math.round(pricesSum / housePrices.length);
    return average
}

console.log(getAverage(housePrices));


function getMedian(housePrices) {

    let middleIndex = Math.floor(housePrices.length / 2);
    let median = housePrices[middleIndex];
    return median;
}

console.log(getMedian(housePrices));


function getAverageAndMedian(housePrices) {

    let objectWithAverageAndMedian = {
        averageKey: getAverage(housePrices),
        medianKey: getMedian(housePrices)
    }

    return objectWithAverageAndMedian

}

console.log(getAverageAndMedian(housePrices));













// 3. ---> SPIRIT ANIMAL NAME GENERATOR ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3a: function with a parameter (no connection with html because I couldn't make it work)

let firstWordsX = ["Drunk", "Stoned", "Forrest", "Mortal", "Fluffy", "Cyber", "Hardworking", "Squeeshy", "Martian", "Smart"];
let secondWordsX = ["Koala", "Kitty", "Squirrel", "Fluffling", "Squirrel", "Bunny", "Alpaca", "Hedgehog", "Robot", "Wolf"];
let spiritAnimalX = firstWordsX[Math.floor(Math.random() * firstWordsX.length)] + " " + secondWordsX[Math.floor(Math.random() * secondWordsX.length)];


function getSpiritAnimal(name) {
    if (!name) {
        return name;
    }
    else if (typeof (name) === typeof ('somerandomstring')) {
        return spiritAnimalX;
    }
    else if (typeof (name) === typeof (666)) {
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

