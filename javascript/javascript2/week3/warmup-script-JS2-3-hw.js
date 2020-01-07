console.log(`Hello World! Hello Kitty! / Parallel world connection test.`)
console.log(`\n \n This is HOMEWORK [DRAFT] JS2-3 week-11 by Magdalena /HYF /class 12. \n\ \n`);



// 01.0 WARM UP 


// 01.1  
setTimeout(() => console.log(`WarmUp:01.1: I logged after 2.5 seconds`), 2500);


// 01.2 
function logDelayedStrings(stringToLog, delay) {
    return setTimeout(() => console.log(stringToLog), delay)
}
logDelayedStrings(`WarmUp:01.2: I logged after 1.0 second.`, 1000);
logDelayedStrings(`WarmUp:01.2: I logged after 1.2 seconds.`, 1200);


// 01.3
function logDelayedStringsWhenClicked() {
    logDelayedStrings(`WarmUp:01.3: I'm called 5 seconds after the sad button is clicked.`, 5000);
}
document.getElementById("sad-bttn").addEventListener("click", logDelayedStringsWhenClicked);


// 01.4
const logEarth = () => { console.log(`WarmUp:01.4: Earth`); };                            // https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
const logSaturn = () => { console.log(`WarmUp:01.4: Saturn`); };
function planetLogFunction(paramIsFunction) {
    paramIsFunction();
}
planetLogFunction(logEarth);
planetLogFunction(logSaturn);



// 01.5  
// 01.6*
// Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api  
// Show* that location on a map using Google maps api: https://developers.google.com/maps/documentation/javascript/tutorial 

const logLatitude = () => { console.log(`WarmUp:01.5: LATITUDE`); };
const logLongitude = () => { console.log(`WarmUp:01.5: LONGITUDE`); };
function logCoordinatesWhenClicked(param) {
    console.log(`I work`)
    param();
}
logCoordinatesWhenClicked(logLatitude)
logCoordinatesWhenClicked(logLongitude)                         //  to be continued




// 01.7
function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
}
runAfterDelay(4, function () { console.log(`WarmUp:01.7: I should log after 4 seconds`); })
runAfterDelay(3, function () { console.log(`WarmUp:01.7: I should log after 3 seconds`); })


// 01.8 
document.addEventListener('dblclick', function () { console.log(`WarmUp:01.8: This is a DOUBLE CLICK.`) })
document.addEventListener('mouseenter', function () { console.log(`       <---  The mouse has entered the document.`) })
document.addEventListener('mouseleave', function () { console.log(`       --->  The mouse has left the document.`) })


// 01.9 
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    logFunnyJoke = function () { console.log(`WarmUp:01.9: :-) https://pics.me.me/got-a-new-error-progress-smemegenerator-net-coding-memes-51672926.png`) }
    logBadJoke = function () { console.log(`WarmUp:01.9: :-( https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IjmlWNb9XX3vr3hIqdkoT3wDh8tsDGGD2Rpe7qsP8vzEGnlR&s`) }
    if (shouldTellFunnyJoke === true) { return logFunnyJoke(); }
    else { return logBadJoke(); }
}
jokeCreator(true);
jokeCreator(0);




// 02.0 Function as a variable                          ---> Create funtions that are used in these different ways: 

// 02.1 ---> Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
let arRay = [fn_1, fn_2, fn_3];
function fn_1() { console.log(`WarmUp:02.1: Function fn_1`); }
function fn_2() { console.log(`WarmUp:02.1: Function fn_2`); }
function fn_3() { console.log(`WarmUp:02.1: Function fn_2`); }
arRay.forEach(item => item());

// 02.2 ---> Create a function as a const ------------ and try creating a function normally. Call both functions.
const function_1 = () => console.log(`WarmUp:02.2: Function as a variable ---> function_1`);
function function_2() { console.log(`WarmUp:02.2: Function (normal way)  ---> function_2`); }
function_1();
function_2();

// 02.3 ---> Create an object that has a key whose value is a function. Try calling this function.
function testObjKeyValFunction() { console.log(`WarmUp:02.3: testObjKeyValFunction`) } // testObjKeyValFunction();
const testObject = { testObjectKey1: testObjKeyValFunction };
testObject.testObjectKey1();