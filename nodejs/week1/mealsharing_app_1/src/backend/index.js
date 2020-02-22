/*  HOMEWORK node.js 1 (week-18) by Magdalena /HYF /class 12 

mealsharing_app  ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework.md#meal-sharing-website 
                      https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework.md#setting-up-the-routes  */


const express = require('express');
const app = express();  

/* REQUIRE !!!
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
https://expressjs.com/en/guide/routing.html  */

// const mealsRouter = require('./routes/meals.js'); app.get('/meals', mealsRouter);   
// app.get('/meals', require('./routes/meals.js'));                                     

// QUESTION: is there any preference? top /bottom syntax? 


app.get('/meal', require('./routes/meal'));
app.get('/meals', require('./routes/meals'));
app.get('/large-meals', require('./routes/large-meals'));
app.get('/cheap-meals', require('./routes/cheap-meals'));
app.get('/reservation', require('./routes/reservation'));
app.get('/reservations', require('./routes/reservations'));

app.listen(3000);
