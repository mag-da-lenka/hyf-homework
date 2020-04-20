import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: this.props.initialValue }; // previously ---> value: 0 
    }

    increment = () => {
        const currentValue = this.state.value; console.log("incrementing");
        this.setState({ value: currentValue + 1 });
    };
    decrement = () => {
        const currentValue = this.state.value; console.log("decrementing");
        if (currentValue === 0) { alert("you can't decrement") }
        else { this.setState({ value: currentValue - 1 }); }
    };
    reset = () => {
        this.setState({ value: this.props.initialValue }); console.log("reset");
    };

    render() {
        return (
            <div className="counter">
                <h1>Hi. I'm a counter ---> {this.state.value}</h1> {console.log(this.state.value)}
                <div className="btns-rows">
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.reset}>reset</button>
                </div>

            </div>
        );
    }

}

export default Counter;