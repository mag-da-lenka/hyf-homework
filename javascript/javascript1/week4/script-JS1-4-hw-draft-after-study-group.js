
console.log(`Hello World! / Parallel world connection test from our study group.`)
console.log(`This is HOMEWORK JS1-4 week-08 by Magdalena /HYF /class 12.`);






// // Voice Assistant  





let nameList = [];
let favDishList = [];
let toDoList = [];
let myCalendar = [];







function getReply(command) {





    if (typeof (command) === typeof (5) && (command !== null)) {
        return (`Math? Ok. Here's your result: ${command}.`);
    }


    // // the below is an alternative version to the above but it needs to have the syntax corrected :>
    // if (           (command.includes('What is') || (command.includes(typeof (5))             )    {
    //     return (`Math? Ok. Here's your result: ${command}.`);
    // }






    if (command === 'What is love' || command === 'What is love?') {
        return (`You asked what love is. The answer: Baby don't hurt meee / don't hurt meee / no moooooore... 
        --->  https://www.youtube.com/watch?v=K5G1FmU-ldg`)
    }



    let commandInWords = command.toLowerCase().split(' '); // this is the new approach  ---> Tahnk you, JUSTINA :) ---> chaining method ---> dot dot dot :)
    // let commandInWords = command.split(' ');  /// old version
    // console.log(commandInWords);     // ----> every command (except pure numbers) logs like this: (12) ["Add", "Bike", "ride", "the", "3", "/", "5", "/", "2019", "to", "my", "calendar"]











    if (command.includes('calendar')) {

        // console.log(`3 basic checks below:`);
        // console.log(command.includes('calendar'));   // -----> (12) true 
        // console.log(command);                        // ---> Add Bike ride the 3 / 5 / 2019 to my calendar
        // console.log(typeof (command));               // ---> string

        let myEventLabel = commandInWords.slice(1, -3);  // console.log(`This shows myEventLabel to be pushed: ${myEventLabel}`);         // ---> bike,ride,the,3,/,5,/,2019    // 0 1 2 3 4 5 6 7 || -8 -7 -6 -5 -4 -3 -2 -1
        let myEventLabelJoined = commandInWords.slice(1, -3).join(' ');  // console.log(`This shows myEventLabelJoined to be pushed: ${myEventLabelJoined}`);         // ---> works ok

        let eventName = myEventLabel.slice(0, -6).join(' '); console.log(`This shows eventName: ${eventName}`);                       // ---> bike ride 
        let eventDate = myEventLabel.slice(3).join(' '); console.log(`This shows eventDate: ${eventDate}`);                           // ---> 3 / 5 / 2019


        let myEventObject = {   // this is when the problem starts because it is later displayed inside myCalendar array as [object Object] o_O
            name: eventName,
            date: eventDate
        };




        myCalendar.push(myEventLabelJoined); //this works -- kind of 

        myCalendar.push(myEventObject); // this shows [object Object]



        return (`You have added ${eventName} on ${eventDate} to your calendar.`);



    }


    if (command === 'What am I doing this week ?') {

        let year = new Date().getFullYear();
        let dayNumber = new Date().getDate();  // console.log(new Date().getDate());  //this shows you 27 if today is e.g. the 27th of November
        let month = new Date().getMonth();
        let monthList = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let monthWritten = monthList[month];

        // console.log(`This shows the flesh of myCalendar: ${myCalendar}.`);

        return (`Today is ${dayNumber} of ${monthWritten} ${year}.  --> Here's your calendar content: ${myCalendar}. Total number of events: ${myCalendar.length}.`)

    }








    for (let i = 0; i <= commandInWords.length - 1; i++) {



        let lowerCaseCommand = command.toLowerCase();



        if (commandInWords.includes('add') && commandInWords[commandInWords.length - 3] == 'to' && commandInWords[commandInWords.length - 1] == 'todo') {
            // https://www.geeksforgeeks.org/javascript-string-includes-method/ includes() METHOD !!!
            toDoList.push(commandInWords[1]);
            return (`Added ${commandInWords[1]} to your to do list.`);
        }

        if (commandInWords[0] == 'remove' && commandInWords[commandInWords.length - 3] == 'from' && commandInWords[commandInWords.length - 1] == 'todo') {
            // console.log(commandInWords[1]); // ---> the second word in the aommand which is now a split array :> // in this case it is fishing and I will remove it in the next line 
            toDoList.splice(commandInWords[1], 1);  // 1 element at index=commandInWords[1]] from the to do list 
            return (`Removed ${commandInWords[1]} from your to do list.`);
        }

        if (lowerCaseCommand == 'what is on my todo' || lowerCaseCommand == 'what is on my todo?') {
            return (`This is your current to do list: ${toDoList}`);
        }


        if (lowerCaseCommand == 'what day is it today?' || lowerCaseCommand == 'what day is it today') {
            return (`Today is ${new Date().toDateString()}`); // w3schools <3 https://www.w3schools.com/js/js_dates.asp keep scrolling till you find it 
        }


        if (commandInWords[1] == 'favorite' && commandInWords[2] == 'dish') {
            favDishList.push(commandInWords[4]); //accessing the last string in the split array, which here is lasagne 
            return (`Added ${commandInWords[4]} to your favourite dish list. Nom Nom Nom.`);
        }

        if (lowerCaseCommand == 'what is my favorite dish') {
            return (`Your favourite dish is ${favDishList}.`); // I simply need to show the content of the favDishList because now it contains lasagne. 
        }


        if (commandInWords.includes('hello') || commandInWords.includes('hi')) {


            let thisName = commandInWords[commandInWords.length - 1]; // provided that the name, eg. Benjamin is the last word. 
            // console.log(thisName);
            // console.log(nameList.includes(thisName)) 



            if (nameList.includes(thisName)) {
                return `Mooo! I've seen you before ${thisName}. Welcome back :* `
            }

            else {
                commandInWords.splice(0, -1); // accessng the last string in the command as an array. Here it is the name. 
                nameList.push(thisName);
                return `New here ${thisName}? Nice to meet you :*`
            }




        }




        if (commandInWords.includes('what', 'name')) {

            return `If you don't know what your name is please type sth like this: "I am [type your birth name here]. What is my name?" 
            I don't think I get what I am required to do here... `


        }





        if (commandInWords.includes('timer')) {

            // first I will have to convert '4' into number 4, otherwise n calculation is possible ---> https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
            let minutesToSetStr = commandInWords[3]; // console.log(minutesToSetStr); console.log(typeof (minutesToSetStr));        // ---> '4' ---> STRING    :(
            let minutesToSetNr = parseInt(minutesToSetStr); // console.log(minutesToSetNr); console.log(typeof (minutesToSetNr));   // --->  4  ---> NUMBER    :)

            // https://www.w3schools.com/jsref/met_win_settimeout.asp   but it needs minutes in milliseconds as a parameter ... so --->
            let minutesToSetNrInMili = minutesToSetNr * 60000  // because 1 minute === 60000 milliseconds   // console.log(minutesToSetNrInMili); // ---> 240000  <---  4 minutes  * 60000

            setTimeout(function () { alert(`MOOOO! Your timer has stopped counting. It was set for ${minutesToSetNr} minutes.`); }, minutesToSetNrInMili);   //this sets the timer and creates a message box that will appear after 240000 milliseconds

            alert(`Hello! Your timer has started counting. It is set for ${minutesToSetNr} minutes. Another box like me will tell you when it's over.`);     // a message box just to let someone know that the alarm has been set 

            return (`Your timer is set to ${minutesToSetNr} minutes).`); // just to log something meaningfue :>


        }




        // if (commandInWords.includes('calendar')) {                                                                  // old version but I'll leave it here as a warning :)
        //     // console.log(commandInWords.includes('calendar')); // -----> (12) true 
        //     // console.log(commandInWords[i]); // ---> all the wtrings separated, like: add - the -bike -ride ......
        //     // console.log(typeof (commandInWords[i])); // ---> string string string string .....


        //     // let someEvent = commandInWords.slice(1, -3);          console.log(someEvent);
        //     // let eventName = someEvent.slice(0, -2).join(' ');     console.log(eventName);
        //     // let eventDate = someEvent.pop();                      console.log(eventDate);

        //     // // someEvent.push({ name: eventName, date: eventDate });

        //     // // console.log(`${eventName} added to your calendar`);


        //     myCalendar.push(commandInWords[1]);
        //     myCalendar.push(commandInWords[2]);
        //     return (`Added ${commandInWords[1]} ${commandInWords[2]} to your calendar.  ---> to be continued because that is no the way :>   `);

        // }






    }











}



console.log(`---> INPUT --> 'nameList'`); console.log(nameList); // ---> works: it shows the names inside the nameList array :)

console.log(`---> INPUT --> 'hello my name is Magda'`); console.log(getReply('hello my name is Magda')); // Should 1. save the name magda 2. respond with "nice to meet you magda"     // What if someone writes this twice? FIX FIX FIX 
console.log(`---> INPUT --> 'hello my name is Magda'`); console.log(getReply('hello my name is Magda')); // I NEED TO FIX THIS AND PREVENT THE NAME FROM BEING ADDED TO nameList ARRAY! 
console.log(`---> INPUT --> 'Hi my name is Mohammed'`); console.log(getReply('Hi my name is Mohammed')); // btw UPPER CASE and it wooorks :) 

console.log(`---> INPUT --> 'nameList'`); console.log(nameList); // ---> works: it shows the names inside the nameList array :)
console.log(`---> INPUT --> 'What is my name'`); console.log(getReply('What is my name'));   //should respond with the name of the person.  //What if the name has not yet been mentioned?






console.log(`---> INPUT --> 'Add fishing to my todo'`); console.log(getReply('Add fishing to my todo'));   // adds fishing to my to do and responds as required 
console.log(`---> INPUT --> 'Add singing in the shower to my todo'`); console.log(getReply('Add singing in the shower to my todo'));   // as above
console.log(`---> INPUT --> 'Add coding in my sleep to my todo'`); console.log(getReply('Add coding in my sleep to my todo'));   // as above
console.log(`---> INPUT --> 'What is on my todo'`); console.log(getReply('What is on my todo')); // works




console.log(`---> INPUT --> 'Remove fishing from my todo'`); console.log(getReply('Remove fishing from my todo'));   // removes the item from the to do list and responds as required
console.log(`---> INPUT --> 'What is on my todo'`); console.log(getReply('What is on my todo'));   // works because it doesn't show the removed item anymore 

console.log(`---> INPUT --> 'What day is it today?'`); console.log(getReply('What day is it today?'));   // Should respond with the date in a human readable format. eg. if today is 30/8/2019 then it should respond with 30. of August 2019
console.log(`---> INPUT --> 'What is love'`); console.log(getReply('What is love')); // Baby don't hurt me LINK :>  This is the extra command we were supposed to add ;>

console.log(`---> INPUT --> 'My favorite dish is lasagne'`); console.log(getReply('My favorite dish is lasagne'));   //  saves the user's favorite dish as lasagne on the favourite dish list
console.log(`---> INPUT --> 'What is my favorite dish'`); console.log(getReply('What is my favorite dish')); // responds with the favorite dish



console.log(`---> INPUT --> 1 * 8 + 1 <--`);  // Should be able to do simple math.fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48  
console.log(getReply(1 * 8 + 1));  //  ---> 9 
console.log(`---> INPUT --> 333 * 2 <--`);
console.log(getReply(333 * 2)); // ---> 666 





console.log(`---> INPUT --> 'Set timer for 4 minutes'`); console.log(getReply('Set timer for 4 minutes'));  // Should respond with "Timer set for 4 minutes".When 4 minutes is up: "Timer done".  // How do we set a timer in js ? Google is your friend here!

console.log(`---> INPUT --> 'Add Bike ride the 3 / 5 / 2019 to my calendar'`); console.log(getReply('Add Bike ride the 3 / 5 / 2019 to my calendar'));  //Should respond with "Bike ride added to your calendar".   Should add an event represented by an object with keys name and date to an array of events.


console.log(`---> INPUT --> 'What am I doing this week ?'`); console.log(getReply('What am I doing this week ?'));  // should respond with the events for that week.Fx "This week you have 1 event: Bike ride the 3. of May 2019"










// just some old notes 


// let name = commandInWords;
// let thisName = name[name.length - 1]; 

// console.log(getReply('I am Magda. What is my name?'));

// if (commandInWords.includes('i', 'am', 'what', 'name')) {
//     let askedName = commandInWords[commandInWords[2]; // provided that the name, eg. Benjamin is the last word. 
//     console.log(askedName);
//     // return `This is your name:   ${askedName}  . `
// }
