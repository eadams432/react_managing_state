import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberDisplay from './NumberDisplay.js';
import Quiz from './Quiz';


class App extends Component {
  
  constructor(props){
    super(props); 
    this.state = {
      numCorrect: 0,
      numAnswered: 0,
    };
  } 

  evaluateResult = (isCorrect) => {  
  	if(isCorrect){
      this.setState((prevState)=>({
        numCorrect: prevState.numCorrect + 1,
        numAnswered: prevState.numAnswered + 1
      }));
    } else {
      this.setState((prevState)=>({
        numAnswered: prevState.numAnswered + 1
      }));
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
		  <Quiz evaluateQuiz={this.evaluateResult}/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numAnswered}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
