// HOMEWORK node.js 2 (week-19) by Magdalena /HYF /class 12
// console.log("parallel world connection test");  
// WarmUp ---> small_calculator ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week2/homework.md#warmup

const express = require('express');
const route = express();

route.get('/', function (req, res) {

    res.send(`
    <p> http://localhost:3000/ </p>
    <p> Hello Squirrels, we will be building a calculator.</p>
    `);

});

route.get('/numbers/add', function (req, res) {

    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let sumBoth = (number1 + number2).toString();

    res.send(` 
    <p> ADDITION: </p>
    <p> http://localhost:3000/numbers/add?firstNumber=39&secondNumber=560 </p>
    <p> firstNumber ${number1} + secondNumber ${number2}  =   sumBoth ${sumBoth} </p>  
    `);

});


route.get('/numbers/multiply/', function (req, res) {

    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let multiplyBoth = (number1 * number2).toString();

    res.send(` 
    <p> MULTIPLICATION: </p>
    <p> http://localhost:3000/numbers/multiply?firstNumber=39&secondNumber=560 </p>
    <p> firstNumber ${number1} * secondNumber ${number2}  =   sumBoth ${multiplyBoth} </p>  
    `);

});

route.get('/numbers/divide/', function (req, res) {

    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let divideBoth = (number1 / number2).toString();

    res.send(` 
    <p> DIVISION: </p>
    <p> http://localhost:3000/numbers/divide?firstNumber=39&secondNumber=560 </p>
    <p> firstNumber ${number1} / secondNumber ${number2}  =   divideBoth ${divideBoth} </p>  
    `);

});


route.get('/numbers/addthendivide/', function (req, res) {

    let number1 = Number(req.query.firstNumber);
    let number2 = Number(req.query.secondNumber);
    let number3 = Number(req.query.thirdNumber);
    let AddThendivide = ((number1 + number2) / (number3)).toString();

    res.send(` 
    <p> ADDITION, then ---> DIVISION: </p>
    <p> http://localhost:3000/numbers/addthendivide?firstNumber=39&secondNumber=560&thirdNumber=2 </p>
    <p> firstNumber (${number1} + secondNumber ${number2}) / thirdNumber ${number3}  =   AddThendivide ${AddThendivide} </p> 
    `);

});


route.listen(3000);