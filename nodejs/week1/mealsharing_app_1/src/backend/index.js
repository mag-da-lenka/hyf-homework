/*  HOMEWORK node.js 1 (week-18) by Magdalena /HYF /class 12 

mealsharing_app  ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework.md#meal-sharing-website 
                      https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework.md#setting-up-the-routes  */


const express = require('express');
const app = express();

/* REQUIRE !!!
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
https://expressjs.com/en/guide/routing.html  */


app.get('/', (req, res) => {
    res.send(`
<h1>This is a mealsharing_app</h1>
<p> written for squirrels to help them get proper nutrition 
---> and that\'s <em>...nuts </em> !!! </p>
`);
});

const mealRouter = require('./routes/meal.js');
app.get('/meal', mealRouter);

const mealsRouter = require('./routes/meals.js');
app.get('/meals', mealsRouter);

const largeMealsRouter = require('./routes/large-meals.js');
app.get('/large-meals', largeMealsRouter);

const cheapMealsRouter = require('./routes/cheap-meals.js');
app.get('/cheap-meals', cheapMealsRouter);

const reservationRoute = require('./routes/reservation.js');
app.get('/reservation', reservationRoute);

const reservationsRoute = require('./routes/reservations.js');
app.get('/reservations', reservationsRoute);

// also: 
// app.get('/meal', require('./routes/meal'));
// app.get('/meals', require('./routes/meals'));
// app.get('/large-meals', require('./routes/large-meals'));
// app.get('/cheap-meals', require('./routes/cheap-meals'));
// app.get('/reservation', require('./routes/reservation'));
// app.get('/reservations', require('./routes/reservations'));

app.listen(3000);


// http://localhost:3000
// http://localhost:3000/meal
// http://localhost:3000/meals 
// http://localhost:3000/large-meals
// http://localhost:3000/cheap-meals 
// http://localhost:3000/reservation 
// http://localhost:3000/reservations 