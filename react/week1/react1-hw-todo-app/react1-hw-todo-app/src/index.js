// instructions: 
// https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// DATE FORMATTING
// const unformatted_today = new Date()
// const slightly_formatted_today = new Date('2020/12/31').toDateString()
const year = new Date().getFullYear();
const months_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month_name = months_names[new Date().getMonth()];
const month_number = appendLeadingZeroes(new Date().getMonth() + 1);
const days_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  // 0 - 1 - 2 - 3 - 4 - 5 - 6
const day_name = days_names[new Date().getDay()];
const day_number = appendLeadingZeroes(new Date().getDate());
const hours = appendLeadingZeroes(new Date().getHours());
const minutes = appendLeadingZeroes(new Date().getMinutes());
const seconds = appendLeadingZeroes(new Date().getSeconds());
function appendLeadingZeroes(n) { if (n <= 9) { return "0" + n; } return n }
// const myDateFormat_month_number = `${year}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
// console.log(myDateFormat_month_number); 
const myDateFormat_month_name = `${year}/${month_name}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
// console.log(myDateFormat_month_name);
const myDateFormat_month_number1 = `${year + 1}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const myDateFormat_month_number2 = `${year + 2}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const myDateFormat_month_number3 = `${year + 3}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;
const myDateFormat_month_number4 = `${year + 4}/${month_number}/${day_number} (${day_name})  ${hours}:${minutes}:${seconds} GMT+0100 (CEST)`;


function Header() {
  return (
    <header>
      <h1>HackYourFuture React-1 homework // Magda</h1>
      <h4>
        Today is {myDateFormat_month_name} <br />
        What one squirrel needs to do: <br />
      </h4>
      ---> click <a href="https://github.com/HackYourFuture-CPH/React/blob/master/week1/homework.md#basic-react--props"> here</a> to see the instructions
    </header>
  );
}

const todoThings =
  [
    {
      nr: 1,
      task: 'Sing with the cat',
      date: myDateFormat_month_number1
    },
    {
      nr: 2,
      task: 'Code for squirrels',
      date: myDateFormat_month_number2
    },
    {
      nr: 3,
      task: 'Comb the tail',
      date: myDateFormat_month_number3
    },
    {
      nr: 4,
      task: 'Listen to Sepultura',
      date: myDateFormat_month_number4
    }
  ];

class TodoList extends React.Component {
  render() {
    const toDoListMapped = todoThings.map((tasks) => {
      return (
        <div key={tasks.nr}>
          {tasks.nr}. {tasks.date}: {tasks.task}
        </div>
      );
    });
    return <main className="todolist">
      To do list: {toDoListMapped}
    </main>;
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h4>The footer says: respect your roots and squirrels. And love cats!</h4>
        ---> click <a href="https://www.youtube.com/watch?v=9iGoDNlKY-g"> here </a> to see squirrels <br />
        ---> click <a href="https://www.youtube.com/watch?v=F_6IjeprfEs"> here </a> to listen to Sepultura
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

const rootsBloodyRoots = document.getElementById("root")
ReactDOM.render(<App />, rootsBloodyRoots);