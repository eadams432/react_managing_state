import React, { Component } from 'react';
import NumberDisplay from './NumberDisplay.js';

class Quiz extends Component {
  
  constructor(props){
  	super(props);
    
    const valsArray = this.setValues();
    
    this.state = {
      value1 : valsArray[0],
	  value2 : valsArray[1],
	  value3 :valsArray[2],
	  proposedAnswer : valsArray[3]
    };
  }
  
  setValues() {
  	const v1 = Math.floor(Math.random() * 100);
    const v2 = Math.floor(Math.random() * 100);
    const v3 = Math.floor(Math.random() * 100);
    const v4 = Math.floor(Math.random() * 3) + v1 + v2 + v3;
    return [v1,v2,v3,v4];
  }
  
  calculate(input){
    const answer = (this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer) ? true : false;
  	
    const newVals = this.setValues();
    this.setState((prevState)=>({
      value1 : newVals[0],
	  value2 : newVals[1],
	  value3 :newVals[2],
	  proposedAnswer : newVals[3]
    }));
    const isCorrect = (input === answer) ? true : false;
    return this.props.evaluateQuiz(isCorrect);
  }

  render(){
    	return(
          <div>
             <div className="equation">
              <NumberDisplay value1={this.state.value1} value2={this.state.value2} value3={this.state.value3} proposedAnswer={this.state.proposedAnswer} />
            </div>
            <button onClick={()=>this.calculate(true)}>True</button>
            <button onClick={()=>this.calculate(false)}>False</button>
		  </div>
		);
  }
  

}

export default Quiz