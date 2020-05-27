import React, { Component } from 'react';
import terrier from './images/kyome_terrier.png';
import './App.css';
import { ToDoListItem } from './ToDoListItem';

class App extends Component {
    state = {
        value: 0
    };

    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    handleDecrement = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    render() {
        return (<div className="App">
        <img src={terrier} className="terrier" alt="terrier" />
        <p>カウント：{this.state.value}</p>
        <p>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        </p>
        <ToDoListItem
        title="ゴミ出し"
        description="燃えるゴミは火曜日と金曜日"
        />
        </div>
        );
    }
}

export default App;
