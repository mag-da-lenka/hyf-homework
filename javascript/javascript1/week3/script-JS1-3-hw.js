console.log(`HOMEWORK JS1-3 week-07 by Magdalena /HYF /class 12`);



// 1. Codecamp -done.  
console.log(`Hello World! My username on Codecamp is mag-da-lena.`); //parallel world connection test :) 









// 2. Item array removal 

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

names.splice(1, 1); // replaces 1 element at index 1 with nothingness :>
console.log(names); // expected:  ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'] 
//                       result:  ["Peter", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"]

--Badr advice review
/* I would do it in a different way, let say that we know that 'Ahmed' should be deleted, what we don't know 
is that the array disposition can change, so we can store the name in a variable by doing:
const nameToRemove=names.indexOf('Ahmed') by doing this we know for fact that even if the disposition change , our
variable value will change as well.
Then do names.spilce(1,nameToRemove)
*/





// 3. When will we be there??  

let travelInformation = { //variable --> object with 2 keys
     speed: 50,
     distance: 432,
};

// console.log(travelInformation.speed);  //  just testing if I can access the keys :>
// console.log(travelInformation.distance);

function howLong(myTravelInfo) {//you have to pass the argument inside the function
/* Becuase when you pass the parameters in your function ,as you have done below, you have to make sure that you pass the same
parameter as argument on the function , as I have done here, NOTE: you have to change the name
it shouldn't be the same name.
*/ 
     let mySpeed = myTravelInfo.speed;
     let myDistance = myTravelInfo.distance;
     let resultInMinutes = myDistance * 60 / mySpeed; // common knowledge: if we cover 50 km in 60 mins, then we cover 432 km in 518,4 mins    
     // console.log(`Your journey will take ${resultInMinutes} minutes`); 

     // formatting: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php
     let hours = (resultInMinutes / 60); let rhours = Math.floor(hours);
     let minutes = (hours - rhours) * 60; let rminutes = Math.round(minutes);

     console.log(`Your journey will take ${rhours} hour(s) and ${rminutes} minute(s)`);// <--- final result

};

howLong(travelInformation); //up to this point it will display the above consol.log = in munutes











// 4. Series duration of my life 

let seriesDurations = [ //an array with 3 objects

     {
          title: 'Game of Thrones',
          days: 3,
          hours: 1,
          minutes: 0,
     },     // comma

     {
          title: 'The Walking Dead',
          days: 7,
          hours: 2,
          minutes: 18,
     },     // comma

     {
          title: 'The Handmaid\'s Tale',
          days: 4,
          hours: 8,
          minutes: 47,
     }     // NO comma

]; // is the semicolon necessary? It depends if you have some prettier extension on your IDE,but it shouldn't cause any problem, in this case 

// console.log(typeof (seriesDurations)); // ---> object! but it is an array with 3 objects!
/*Yes arrays are object , but we don't confuse them with the Object.
However, unlike regular objects, arrays have certain special features.
Arrays have an object in their prototype solution - named Array.prototype.
This contains all the methods that we use for Array such array.lenght , array.spilice, ecc..

*/
// console.log(seriesDurations[0].title); // ---> Game of Thrones 
// console.log(seriesDurations[1].days);  // ---> 7
// console.log(seriesDurations.length);   // ---> 3


function showMeWhatIveDoneWithMyLife(seriesDurations, myAge) {

     let aYearinMinutes = 365.25 * 24 * 60;
     // console.log(`THIS SHOWS aYearinMinutes: ${aYearinMinutes}.`); // ---> 525960 <--- (525.960,00 minutes) 

     let myLifeinMinutes = myAge * aYearinMinutes;
     // console.log(`THIS SHOWS myAge: ${myAge}.`); // ---> 39
     // console.log(`THIS SHOWS myLifeinMinutes: ${myLifeinMinutes}.`); // ---> 20512440 <--- (20.512.440,00)  

     console.log(`(Not so) fun fact: the length of my life is ${myAge} years and that equals ${myLifeinMinutes} minutes!`);  
///HOW TO ESCAPE THE LOOP tp avoid repetition?
// you are logging inside the for loop , so for fact per each i< of your array length , will display the result.
// you cannot break a for unless you a defined statement such "if" that put a condition to the for to break, but not your case.

     for (i = 0; i < seriesDurations.length; i++) {    // a little loop to help display things by chosen criteria   

          let titles = seriesDurations[i].title;
          // console.log(titles); // ---> Game of Thrones The Walking Dead The Handmaid's Tale 
          let singletitleDurationInMinutes = seriesDurations[i].minutes + seriesDurations[i].hours * 60 + seriesDurations[i].days * 24 * 60; //in minutes
          // console.log(singletitleDurationInMinutes); // ---> 4380 10218 6287   

          // LOGIC: myLifeinMinutes equals 100%  and singletitleDurationInMinutes equals X% ---> x=(singletitleDurationInMinutes * 100) / myLifeinMinutes  !!! 
          let percentEachSeriesTookToWatch = (singletitleDurationInMinutes * 100) / myLifeinMinutes;

          console.log(`${titles} has taken ${percentEachSeriesTookToWatch} percent of my life. Btw, that is ${singletitleDurationInMinutes} minutes (of my life).`)

          // let totalTimeOfSeriesInMinutes = (seriesDurations[i].minutes) + (seriesDurations[i].hours * 60) + (seriesDurations[i].days * 24 * 60);
          // console.log(totalTimeOfSeriesInMinutes); // Naaaah. WRONG. 
          // let percentageofSeriesSeenInLife = (totalTimeOfSeriesInMinutes * 100) / myLifeinMinutes;
          // console.log(`In total watching the abovementioned series took ${percentageofSeriesSeenInLife} percent of my life. I'm stuck !`); 
          // the struggle is to be continued :>

     }


}

showMeWhatIveDoneWithMyLife(seriesDurations, 39);







// 5. My favorite songs 












// 6. NOnoN0nOYes (Note taking app) 













// 7. CactusIO-interactive (Smart phone usage app) optional 

