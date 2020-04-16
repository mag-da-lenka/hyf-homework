// instructions:  https://github.com/HackYourFuture-CPH/React/blob/master/week2/homework.md#basic-react--props

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './c_header';
import Timer from './c_timer';
import Counter from './c_counter';
import TaskList from './c_todolist';
import Footer from './c_footer';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Timer />
        <Counter initialValue={666} />
        <TaskList></TaskList>
        <Footer />
      </div>
    );
  }
}

const rootsBloodyRoots = document.getElementById("root");
ReactDOM.render(<App />, rootsBloodyRoots);