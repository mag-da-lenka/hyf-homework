

//HOMEWORK JS1-1 week-05 by Magdalena /HYF /class 12
console.log("Hello World! My username on Codecamp is mag-da-lena."); //parallel world connection test :) 




// 1. Codecamp -done.  




// 2. FLIGHT BOOKING APP: There are 3 versions: 2a, 2b, and 2c because I needed to exercise the syntax and correct typing :>  

// 2a: warm-up :) 
function getFullname01(firstname, surname) {
     let showfullName01 = firstname + " " + surname;
     console.log(showfullName01);
     return showfullName01;
}
getFullname01('Benjamin', 'Hughes');
getFullname01('Magdalena', 'Voigt');
getFullname01('Squirrel', 'Forrester');//it works --> Benjamin Hughes  Magdalena Voigt  Squirrel Forrester 


// 2b: long version
function getFullname(firstName, surName, formalTitle) {

     let fullName = firstName + " " + surName;
     let formalName = formalTitle + " " + firstName + " " + surName;

     if (formalTitle) {

          if (firstName.length > 2 && surName.length > 2 && formalTitle.length >= 2) { //  eg. sth like: Mag.. Voi.. Ms...
               return `You have typed: ${formalName}. This is your formal name with title. All info provided. Thak you.`;

          } else if (firstName.length == 2 && surName.length == 2 && formalTitle.length >= 2) { // eg. sth like: M V Ms   or   Ma Vo Ms
               return `You have typed: ${firstName} ${surName}. (Your name and surname are 2 letters long each. If that's correct, please proceed.)`;

          } else if (firstName.length <= 1 && surName.length <= 1 && formalTitle.length >= 2) {// eg. sth like: M V Ms   or   __ __ Ms
               return `You have typed: ${formalTitle} (your formal title), but your name and surname are too short or you forgot to type (some of) them. They need to be min. 2 letters long each.`;



          } else if (firstName.length > 2 && surName.length > 2 && formalTitle.length == 1) { //  eg. sth like: Mag.. Voi.. M...
               return `You have typed: ${formalName}. This is your formal name with title, but the the title has only one letter. It needs min. 2 letters. Please try again.`;

          } else if (firstName.length == 2 && surName.length == 2 && formalTitle.length == 1) { // eg. sth like: M V M   or   Ma Vo M
               return `You have typed: ${firstName} ${surName}. (Your name and surname are 2 letters long each. If that's correct, that's ok but the the title has only one letter. It needs min. 2 letters. Please try again.)`;

          } else (firstName.length <= 1 && surName.length <= 1 && formalTitle.length == 1) // eg. sth like: M V M   or   __ __ M
          return `You have typed: ${formalTitle} (your formal title), but your name and surname and title are too short or you forgot to type (some of) them. They need to be min. 2 letters long each.`;



     } else if (firstName.length >= 2 && surName.length >= 2) { // eg. sth like: Magdalena Voigt   or   Ma Vo 
          return `You have typed: ${fullName} (This is your full name without title. Make sure each of them is min.2 letters long. If that's correct -> all _required_ info provided. Thak you.)`;


     } else (firstName.length < 1 && surName.length < 1)
     return 'You have not typed anything yet. Try again';

}

// main if --> if
getFullname('Magdalena', 'Voigt', 'Ms');
console.log(getFullname('Magdalena', 'Voigt', 'Ms')); // ---> 
getFullname('Mag', 'Voi', 'Ms');
console.log(getFullname('Mag', 'Voi', 'Ms')); // ---> 

getFullname('Ma', 'Vo', 'Ms');
console.log(getFullname('Ma', 'Vo', 'Ms')); // ---> 

getFullname('M', 'V', 'Ms');
console.log(getFullname('M', 'V', 'Ms')); // ---> 
getFullname('', '', 'Ms');
console.log(getFullname('', '', 'Ms')); // ---> 

// main if --> else if
getFullname('Magdalena', 'Voigt', 'M');
console.log(getFullname('Magdalena', 'Voigt', 'M')); // ---> 
getFullname('Mag', 'Voi', 'M');
console.log(getFullname('Mag', 'Voi', 'M')); // ---> 

getFullname('Ma', 'Vo', 'M');
console.log(getFullname('Ma', 'Vo', 'M')); // ---> 

getFullname('M', 'V', 'M');
console.log(getFullname('M', 'V', 'M')); // ---> 
getFullname('', '', 'M');
console.log(getFullname('', '', 'M')); // ---> 

// main else if 
getFullname('Magdalena', 'Voigt');
console.log(getFullname('Magdalena', 'Voigt')); // --->  
getFullname('Ma', 'Vo');
console.log(getFullname('Ma', 'Vo')); // --->

// main else 
getFullname('', '', '');
console.log(getFullname('', '', '')); // ---> 


// 2c: short verion

function getFullname1(firstName1, surName1, formalTitle1) {
     let fullName1 = firstName1 + " " + surName1;
     let formalName1 = formalTitle1 + " " + firstName1 + " " + surName1;
     if (firstName1.length > 2 && surName1.length > 2 && formalTitle1.length >= 2) {
          return `${formalName1} (This is your formal name with title. All info provided. Thak you.)`;
     } else if (firstName1.length > 2 && surName1.length > 2 && formalTitle1.length < 2) {
          return `${fullName1} (Your name is ok. If you'd like to display your title, it needs to be min. 2 letters long.)`;
     } else (firstName1.length <= 2 && surName1.length <= 2 && formalTitle1.length < 2)
     return `We cannot save this. Your first and full name need to be min. 3 letters and your title* (optional)  min. 2 letters long.`;
}
getFullname1('Magda', 'Voigt', 'Lady');
console.log(getFullname1('Magda', 'Voigt', 'Lady')); // ---> Lady Magda Voigt (This is your formal name with title. All info provided. Thak you.)
getFullname1('Magda', 'Voigt', 'M');
console.log(getFullname1('Magda', 'Voigt', 'M')); // ---> Magda Voigt (Your name is ok. If you'd like to display your title, it needs to be min. 2 letters long.)
getFullname1('Ma', 'Vo', 'Ms');
console.log(getFullname1('Ma', 'Vo', 'Ms')); // ---> We cannot save this. Your first and full name need to be min. 3 letters and your title* (optional)  min. 2 letters long.
getFullname1('', '', '');
console.log(getFullname1('', '', '')); // ---> We cannot save this. Your first and full name need to be min. 3 letters and your title* (optional)  min. 2 letters long.






// 3.    Event application  


// brain stimulation: https://www.w3schools.com/jsref/jsref_getday.asp and https://www.w3schools.com/jsref/jsref_getdate.asp <3 
// new Date() --->  Sat Nov 16 2019 11:58:08 GMT+0100 (Central European Standard Time)  // new Date().getDay() //console.log(new Date().getDay()); ---> 6 <--- because today is Sat, Sunday would be 0 ---> 1-2-3-4-5-6-0 
// more brain stimulation: https://www.w3schools.com/js/js_arithmetic.asp    %   <3

function getEventWeekday(daysLeftToEvent) {
     let daysoftheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 0 - 1 - 2 - 3 - 4 - 5 - 6
     return `Today is ${new Date()}. Your next gig takes place on ${daysoftheWeek[(daysLeftToEvent + new Date().getDay()) % (daysoftheWeek.length)]} `;
     //so eg. Today is Sat. Your gig takes place daysoftheWeek index --> [] = --->    // [(2 days left    +     6 as for Sat)      % 6] = 8 % 6 gives 2. And 2 is the index of Tuesday in my array.
}

// You specify how many days from today an event is being held in the parameter, eg. 2 // The function then figures out what weekday the event is being held.
console.log(getEventWeekday(0));  // today=Sat ---> event=Sun  
console.log(getEventWeekday(1));  // today=Sat ---> event=Mon
console.log(getEventWeekday(2));  // today=Sat ---> event=Tue  ---> This is what I checked in the comment above // Today is Sat Nov 16 2019 12:35:21 GMT+0100 (Central European Standard Time). Your next gig takes place on Tue 
console.log(getEventWeekday(3));  // today=Sat ---> event=Wed
console.log(getEventWeekday(4));  // today=Sat ---> event=Thu
console.log(getEventWeekday(5));  // today=Sat ---> event=Fri
console.log(getEventWeekday(6));  // today=Sat ---> event=Sat

console.log(getEventWeekday(7));  // today=Sat ---> event=Sun

console.log(getEventWeekday(8));  // today=Sat ---> event=Mon
console.log(getEventWeekday(15)); // today=Sat ---> event=Mon
console.log(getEventWeekday(22)); // today=Sat ---> event=Mon



// 4. Weather wear 

function properClothes(temperature) {

     if (temperature < -77) {
          return `ARE YOU IN SPACE? Wear a spacesuit!`;

     } else if (temperature >= -77 && temperature <= -35) { // -77 to -35
          return `Winter in Russia or Alaska? Anyways, wear all the warm clothes you have: at least 10 layers. Drink sth warm.`;

     } else if (temperature > -35 && temperature <= -10) { //-36 to -10
          return `Spring in Russia or Alaska? Wear a half of the warm clothes you have: at least 5 layers. Drink sth warm.`;

     } else if (temperature > -10 && temperature <= 0) { //-11 to 0
          return `Winter in Poland? Wear 1/4 of the warm clothes you have: at least 3 layers. Drink in moderation.`;

     } else if (temperature > 0 && temperature <= 7) { //1 to 7
          return `Autumn in Denmark? Wear some clothes and white sneakers. Drink in moderation.`;

     } else if (temperature > 7 && temperature <= 17) { //8 to 17
          return `Mid Spring in Denmark? Wear a floral patterned dress with trousers and sandals. Drink in moderation.`;

     } else if (temperature > 17 && temperature <= 47) {
          return `Wherever you are, it's warm. Wear bikini and go swimming. Drink a lot.`;

     } else {
          return `ARE YOU IN HELL? Wear sth fancy!`
     }

}

properClothes(-89);
console.log(properClothes(-89));
properClothes(-65);
console.log(properClothes(-65));
properClothes(-15);
console.log(properClothes(-15));
properClothes(-7);
console.log(properClothes(-7));
properClothes(6);
console.log(properClothes(6));
properClothes(16);
console.log(properClothes(16));
properClothes(16);
console.log(properClothes(26));
properClothes(666);
console.log(properClothes(666));







// 5. Student manager 

// Figure out how Array.push works. ---> https://www.w3schools.com/jsref/jsref_push.asp 

const class07Students = [];

function addStudentToClass(studentName) {

     if (!studentName) {
          return 'Please provide the name';

     } if (studentName === "Queen") { // the evaluation for "Queen" has to be on top, otherwise the function would stop too soon and not let "Queen" join! 
          return `${class07Students.push(studentName)} It is an honour to have you with us, Dear Queen!`;


     } if ((class07Students.length < 6) && ((studentName) !== (class07Students.indexOf(studentName)))) { //now we set the limit to 6 spots once the "Queen" has got the garantee she could join as the 7th student. 
          return `${class07Students.push(studentName)} Hello New Student! Your name (${studentName}) has been added to the list.`;

     } else (studentName === class07Students.indexOf(studentName))  // https://www.w3schools.com/jsref/jsref_indexof_array.asp (here's how to check (=compare!) whether or not the name is already on the list)
     return `The name (${studentName}) has already been added to the list. You don't need a double spot... Shame on you!`;

}

console.log(addStudentToClass(""));

console.log(addStudentToClass("Fake Queen Anabella"));
console.log(addStudentToClass("Fake Queen Isabella"));
console.log(addStudentToClass("Fake Queen Manuela"));
console.log(addStudentToClass("Fake Queen Isadora"));
console.log(addStudentToClass("Fake Queen Elizabeth"));
console.log(addStudentToClass("Fake Queen Barbarella"));

console.log(addStudentToClass("Fake Queen Anabella"));
console.log(addStudentToClass("Fake Queen Isabella"));

console.log(addStudentToClass("Queen"));



function getNumberOfStudents() {
     return `${class07Students.length}`
}
console.log(getNumberOfStudents());










// 6. Candy helper*      //   I might try later :) 






// 7. Rover the Robot*