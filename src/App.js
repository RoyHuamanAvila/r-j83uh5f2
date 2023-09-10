import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      count: 0
    }
  }

  countCharacters = (e) => {
    const nCharacters = e.target.value.length;
    this.setState({count: nCharacters})
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.countCharacters}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
