
console.log(`Hello World! / Parallel world connection test from our study group.`)
console.log(`This is HOMEWORK JS1-4 week-08 by Magdalena /HYF /class 12.`);






// // Voice Assistant  





let nameList = [];
let favDishList = [];
let toDoList = [];
let myCalendar = [];







function getReply(command) {





    if (typeof (command) === typeof (5) && (command !== null)) {
        return (`... math? Here's your result: ${command}.`);
    }


    if (command === 'What is love' || command === 'What is love?') {
        return (`You asked what love is. The answer: Baby don't hurt meee / don't hurt meee / no moooooore... 
        --->  https://www.youtube.com/watch?v=K5G1FmU-ldg`)
    }


    if (command === 'What am I doing this week ?') {
        return (`This is what's on your CALENDAR this week: ${myCalendar}`)
    }








    let commandInWords = command.toLowerCase().split(' '); // this is the new approach  ---> Tahnk you, JUSTINA :) ---> chaining method ---> dot dot dot :)
    // let commandInWords = command.split(' ');  /// old version
    // console.log(commandInWords);     // ----> every command (except pure numbers) logs like this: (12) ["Add", "Bike", "ride", "the", "3", "/", "5", "/", "2019", "to", "my", "calendar"]





    for (let i = 0; i <= commandInWords.length - 1; i++) {



        let lowerCaseCommand = command.toLowerCase();



        if (commandInWords.includes('add') && commandInWords[commandInWords.length - 3] == 'to' && commandInWords[commandInWords.length - 1] == 'todo') {
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
                return `Welcome back ${thisName}.`
            }

            else {
                commandInWords.splice(0, -1); // accessng the last string in the command as an array. Here it is the name. 
                nameList.push(thisName);
                return `Happy to see you for the first time ${thisName}`
            }





        }




        if (commandInWords.includes('what', 'name')) {

            return `If you don't know what your name is please type sth like this: "I am [type your birth name here]. What is my name?" 
            I don't think I get what I am required to do here... `


        }





        if (commandInWords.includes('timer')) {

            return `TIMER TEST -----> to be googled `

        }


        if (commandInWords.includes('calendar')) {
            // console.log(commandInWords.includes('calendar')); // -----> (12) true o_O
            // console.log(commandInWords[i]); // ---> all the wtrings separated, like: add - the -bike -ride ......
            // console.log(typeof (commandInWords[i])); // ---> string string string string .....


            myCalendar.push(commandInWords[1]);
            myCalendar.push(commandInWords[2]);
            return (`Added ${commandInWords[1]} ${commandInWords[2]} to your calendar.  ---> to be continued because that is no the way :>   `);

        }






    }











}



// https://www.geeksforgeeks.org/javascript-string-includes-method/ includes() METHOD !!!


// // should save the name benjamin 
// // should save the user's favorite dish as lasagne
// // there is a todo list



console.log(getReply(1 * 8 + 1));  // Should be able to do simple math.fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48  
console.log(getReply(333 * 2));

console.log(getReply('Add fishing to my todo'));   // adds fishing to my to do and responds as required 
console.log(getReply('Add singing in the shower to my todo'));   // as above
console.log(getReply('Add coding in my sleep to my todo'));   // as above
console.log(getReply('What is on my todo')); // works

console.log(getReply('Remove fishing from my todo'));   // removes the item from the to do list and responds as required
console.log(getReply('What is on my todo'));   // works because it doesn't show the removed item anymore 

console.log(getReply('What day is it today?'));   // Should respond with the date in a human readable format. eg. if today is 30/8/2019 then it should respond with 30. of August 2019
console.log(getReply('What is love')); // Baby don't hurt me LINK :>  This is the extra command we were supposed to add ;>

console.log(getReply('My favorite dish is lasagne'));   //  saves the user's favorite dish as lasagne on the favourite dish list
console.log(getReply('What is my favorite dish')); // responds with the favorite dish


console.log(nameList); // ---> works: it shows the names inside the nameList array :)

console.log(getReply('hello my name is Magda')); // Should 1. save the name magda 2. respond with "nice to meet you magda"     // What if someone writes this twice? FIX FIX FIX 
console.log(getReply('hello my name is Magda')); // I NEED TO FIX THIS AND PREVENT THE NAME FROM BEING ADDED TO nameList ARRAY! 
console.log(getReply('Hi my name is Mohammed')); // btw UPPER CASE and it wooorks :) 

console.log(nameList); // ---> works: it shows the names inside the nameList array :)
console.log(getReply('What is my name'));   //should respond with the name of the person.  //What if the name has not yet been mentioned?
// console.log(getReply('I am Magda. What is my name?'));





console.log(getReply('Set timer for 4 minutes'));  // Should respond with "Timer set for 4 minutes".When 4 minutes is up: "Timer done".  // How do we set a timer in js ? Google is your friend here!

console.log(getReply('Add Bike ride the 3 / 5 / 2019 to my calendar'));  //Should respond with "Bike ride added to your calendar".   Should add an event represented by an object with keys name and date to an array of events.
console.log(getReply('What am I doing this week ?'));  // should respond with the events for that week.Fx "This week you have 1 event: Bike ride the 3. of May 2019"










// just some old notes 


// let name = commandInWords;
// let thisName = name[name.length - 1]; 


// if (commandInWords.includes('i', 'am', 'what', 'name')) {
//     let askedName = commandInWords[commandInWords[2]; // provided that the name, eg. Benjamin is the last word. 
//     console.log(askedName);
//     // return `This is your name:   ${askedName}  . `
// }
