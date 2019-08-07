import React, { Component } from 'react';
import "./CoffeeBeans.css";

class CoffeeBeans extends Component {
    state={
        value: "",
    }

    onChangeHandler = (event) =>{
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="App">
               <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
               <div className="Coffee">
                <span>{this.state.value}</span>
                <span><button>Delete</button></span>
                </div>
            </div>
        );
    }
}

export default CoffeeBeans;