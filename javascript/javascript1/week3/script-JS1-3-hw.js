
console.log(`Hello World! / Parallel world connection test.`)
console.log(`This is HOMEWORK JS1-3 week-07 by Magdalena /HYF /class 12.`);





// 1. Codecamp -done.  
console.log(`My username on Codecamp is mag-da-lena.`);





// 2. Item array removal 

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

names.splice(1, 1); // replaces 1 element at index 1 with nothingness :>
console.log(names); // expected:  ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'] 
//                       result:  ["Peter", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"]









// 3. When will we be there??  

let travelInformation = { //variable --> object with 2 keys
     speed: 50,
     distance: 432,
};

// console.log(travelInformation.speed);  //  just testing if I can access the keys :>
// console.log(travelInformation.distance);

function howLong() {

     let mySpeed = travelInformation.speed;
     let myDistance = travelInformation.distance;
     let resultInMinutes = myDistance * 60 / mySpeed; // common knowledge: if we cover 50 km in 60 mins, then we cover 432 km in 518,4 mins    
     // console.log(`Your journey will take ${resultInMinutes} minutes`); 

     // formatting: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-13.php
     let hours = (resultInMinutes / 60); let rhours = Math.floor(hours);
     let minutes = (hours - rhours) * 60; let rminutes = Math.round(minutes);

     console.log(`Your journey will take ${rhours} hour(s) and ${rminutes} minute(s)`);// <--- final result

};

howLong(travelInformation);









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

]; // is the semicolon necessary? 

// console.log(typeof (seriesDurations)); // ---> object! but it is an array with 3 objects!
// console.log(seriesDurations[0].title); // ---> Game of Thrones 
// console.log(seriesDurations[1].days);  // ---> 7
// console.log(seriesDurations.length);   // ---> 3


function showMeWhatIveDoneWithMyLife(seriesDurations, myAge) {

     let aYearinMinutes = 365.25 * 24 * 60;
     // console.log(`THIS SHOWS aYearinMinutes: ${aYearinMinutes}.`); // ---> 525960 <--- (525.960,00 minutes) 

     let myLifeinMinutes = myAge * aYearinMinutes;
     // console.log(`THIS SHOWS myAge: ${myAge}.`); // ---> 39
     // console.log(`THIS SHOWS myLifeinMinutes: ${myLifeinMinutes}.`); // ---> 20512440 <--- (20.512.440,00)  

     console.log(`(Not so) fun fact: the length of my life is ${myAge} years and that equals ${myLifeinMinutes} minutes!`);  ///HOW TO ESCAPE THE LOOP tp avoid repetition?

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


let songDatabase = [ //an array of song-objects

     {
          songId: 1,
          title: 'Lateralus',
          artist: 'Tool',
     },

     {
          songId: 2,
          title: 'Dumb Surfer',
          artist: 'King Krule',
     },

     {
          songId: 3,
          title: 'Evan Finds The Third Room',
          artist: 'Khruangbin',
     },

     {
          songId: 4,
          title: 'Drunkship of Lanterns',
          artist: 'The Mars Volta',
     },


];

// console.log(typeof(songDatabase)); // --->  object 
// console.log(songDatabase); // ---> ---> proto = array, length is 4 

let myPlaylist = [];
console.log(myPlaylist);
console.log(` ...so myPlaylist ${myPlaylist} seems to be an empty array now `);



function addSongToDatabase(song) {

     songDatabase.push(song);
     return console.log(songDatabase);

     // Q: Should the function return anything? 
     // A: I think that teachnically it is optional. The songs will be added anyway. Personally I like to have a tool to dynamically control and automatically display my updated song database.  

}

// Before I just used the song-objects it took me some time to figure out how to do it because they didn't have a name I'd be able to use. 3874628746 days later.... :> 
addSongToDatabase({ songId: 5, title: 'Add This Song', artist: 'GusGus', }); // so I've just put the unnamed object as a parameter ..and it finally works... 
addSongToDatabase({ songId: 6, title: 'Roots Bloody Roots', artist: 'Sepultura', });
addSongToDatabase({ songId: 7, title: 'Us Or Them', artist: 'The Cure', });
// addSongToDatabase({ title: 'Us Or Them', artist: 'The Cure', }); // no songId -- just a test -- it was added anyway :) 




function getSongByTitle(title) {

     for (let i = 0; i < songDatabase.length; i++) {  //for Loop to be able to access the full list of potentially matching songs 

          if (title === songDatabase[i].title) { // if the parameter, eg. 'Lateralus' is exactly the same as any of the values in title keys (= title properties), the function will return the full song-object we're searching for. BTW here the return is a must! 
               return console.log(songDatabase[i]);
          }

          if (title !== songDatabase[i].title) { // if the parameter, eg. 'Lateralus' is not the same as any of the values in title keys (= title properties), the function is told to return ---> undefined. 
               return console.log(undefined);
          }

     }

}

getSongByTitle('Lateralus'); // the full song-object is displayed, yay! 
getSongByTitle('Later, Alus!'); // ---> undefined // so it works. 






function addSongToMyPlaylist(title) {

     console.log(title); // ---> 'Dumb Surfer' 
     getSongByTitle(title);   //  I wish that worked but it is undefined and the full object containing 'Dumb Surfer' was displayed, can't make it work  

     myPlaylist.push(title); //now I I have pushed the title 'Dumb Surfer' into empty myPlaylist array created before the functions
     // console.log(myPlaylist); // ---> ['Dumb Surfer'] ---> it works

}

addSongToMyPlaylist('Dumb Surfer');
console.log(myPlaylist); // ---> ["Dumb Surfer"] // --> the problem here is that it is just the title and not the whole song-object... 










// 6. NOnoN0nOYes (Note taking app) 













// 7. CactusIO-interactive (Smart phone usage app) optional 

