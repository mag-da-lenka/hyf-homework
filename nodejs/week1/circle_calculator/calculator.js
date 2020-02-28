// HOMEWORK node.js 1 (week-18) by Magdalena /HYF /class 12
// console.log("parallel world connection test");  
// WarmUp ---> Circle calculator ---> https://github.com/HackYourFuture-CPH/node.js/blob/master/week1/homework.md#warmup

class Circle {

    constructor(radius) { this.radius = radius; }
    getDiameter() { return 2 * this.radius; }
    getCircumference() { return 2 * Math.PI * this.radius; }
    getArea() { return Math.PI * Math.pow(this.radius, 2); }

}

const circle10 = new Circle(10);
console.log(circle10.getDiameter());      // 20 
console.log(circle10.getCircumference()); // 62.83185307179586
console.log(circle10.getArea());          // 314.1592653589793 

const circle27 = new Circle(27);
console.log(circle27.getDiameter());      // 54 
console.log(circle27.getCircumference()); // 169.64600329384882
console.log(circle27.getArea());          // 2290.221044466959 


/*
Madzik@DESKTOP-7S4P8PM MINGW64 ~/Downloads/1-coding-hyf/hyf-12-homework-FINAL/hyf-homework/nodejs/week1/circle_calculator (nodejs_week1_homework)
$ npm run dev

> circle_calculator@1.0.0 dev C:\Users\Madzik\Downloads\1-coding-hyf\hyf-12-homework-FINAL\hyf-homework\nodejs\week1\circle_calculator
> nodemon calculator.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node calculator.js`     
^S20
62.83185307179586
314.1592653589793
54
169.64600329384882
2290.221044466959
[nodemon] clean exit - waiting for changes before restart   
*/

