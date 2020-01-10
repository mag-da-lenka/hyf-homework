console.log(`Hello World! Hello Kitty! / Parallel world connection test.`)
console.log(`\n \n This is HOMEWORK JS3-1 week-12 by Magdalena /HYF /class 12.\n JSON + coolAPI explanation \n\ \n`);

// Tasks: https://github.com/HackYourFuture-CPH/JavaScript/blob/master/javascript3/week1/homework.md


// 01 ---> JSON file as JS object ---> please see the JSON file named jason-momoa 

// pure JSON :)     ---> it's an object with properties (a.k.a. KEYS). Unlike JS objects, JSON keys are in inverted commas. 

/* 
{
    "the Squirrel Object taxonomy": {                                  // an object with strings as values 
        "kingdom": "animalia",
        "order": "rodentia",
        "sub-order": "squirrel-like",
        "genus": "DOM tree squirrels"
    },
    "cyber-enhancements": true,                                        // a Boolean 
    "year of assembly": 2980,                                          // a number
    "movement skills": {                                               // an object with strings as values 
        "jumpability lvl": "high",
        "swimmability lvl": "wobbly - aspiring"
    },
    "colour scope": {                                                  // an object with numbers as values
        "HEX": 923000,
        "saturation": 0.8
    },
    "languages": {                                                     // an object with strings or null as values                           
        "JS": "basic",
        "Polish": "native",
        "Arabic": null,
        "English": "fluent"
    },
    "friends": [                                                       // an array with 2 "twin" objects, which I kept consistent in structure, as discussed in class.
        {                                                              // the value of each "skill set" is another array ---> it contains strings as values. 
            "id": 1,
            "name": "Gryzelda",             
            "species": "cat-like floof",
            "skills set": [
                "refusing",
                "scratching",
                "wide tantrum scope"
            ],
            "weight in kilos": 4, 
            "year of assembly": 2011
        },
        {
            "id": 2,
            "name": "Brunhilda",
            "species": "cat-like floof v. extreme",
            "skills set": [
                "ultra high speed food absorption",
                "bambi eyes mode"
            ],
            "weight in kilos": 6,
            "year of assembly": 2016
        }
    ]
}

*/


let jsonMomoa = `
{
    "the Squirrel Object taxonomy": {       
        "kingdom": "animalia",
        "order": "rodentia",
        "sub-order": "squirrel-like",
        "genus": "DOM tree squirrels"
    },
    "cyber-enhancements": true,
    "year of assembly": 2980,
    "movement skills": {
        "jumpability lvl": "high",
        "swimmability lvl": "wobbly - aspiring"
    },
    "colour scope": {
        "HEX": 923000,
        "saturation": 0.8
    },
    "languages": {
        "JS": "basic",
        "Polish": "native",
        "Arabic": null,
        "English": "fluent"
    },
    "friends": [
        {
            "id": 1,
            "name": "Gryzelda",
            "species": "cat-like floof",
            "skills set": [
                "refusing",
                "scratching",
                "wide tantrum scope"
            ],
            "weight in kilos": 4,
            "year of assembly": 2011
        },
        {
            "id": 2,
            "name": "Brunhilda",
            "species": "cat-like floof v. extreme",
            "skills set": [
                "ultra high speed food absorption",
                "bambi eyes mode"
            ],
            "weight in kilos": 6,
            "year of assembly": 2016
        }
    ]
}
`

console.log('01: JSON file as a JS object in a const called jsonMomoa:', '\n please see my comments in JS file. \n  ', jsonMomoa, `\n  `);





// 02. ---> COOL API   ---> see the HTML file or preview the page 

console.log('02: please see the html for preview the page');