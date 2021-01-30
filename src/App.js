import { useState, Component } from 'react';
import './App.css';
import { evaluate }  from 'mathjs';


function Calculator(){
  return (
    <div>
      <Numpad/>
    </div>
  );
}
// Still figuring out what and how to render a value based on button clicked
// I already figured the useState bit... Now, What is props?

function btnType(x){
  let btnClass;
  if(!isNaN(x) || x === '.'){
    switch(x) {
      case '1':
        btnClass = "Numbers one";
        break;
      case '2':
        btnClass = "Numbers two";
        break;
      case '3':
        btnClass = "Numbers three";
        break;
      case '4':
        btnClass = "Numbers four";
          break;
      case '5':
        btnClass = "Numbers five";
        break;
      case '6':
        btnClass = "Numbers six";
        break;
      case '7':
        btnClass = "Numbers seven";
        break;
      case '8':
        btnClass = "Numbers eight";
        break;
      case '9':
        btnClass = "Numbers nine";
        break;
      case '0':
        btnClass = "Numbers zero";
        break;
      case '.':
        btnClass = "Numbers dot";
        break;
    }
    return btnClass;
    
  }else if(x === '+'||x === '-'||x === '/'||x === '*'||x === '='){
    switch(x) {
      case '+':
        btnClass = 'MainOps plus'
        break;
      case '-':
          btnClass = 'MainOps minus'
          break;
      case '/':
        btnClass = 'MainOps divide'
        break;
      case '*':
        btnClass = 'MainOps times'
        break;
      case '=':
        btnClass = 'MainOps equals'
        break;
    }
    return btnClass;
  }else if(x === 'Clear'||x === '+/-'||x === '%'){
    switch(x) {
      case 'Clear':
        btnClass = 'SpecialOps clear'
        break;
      case '+/-':
          btnClass = 'SpecialOps negate'
          break;
      case '%':
        btnClass = 'SpecialOps percent'
        break;
    }
    return btnClass;
  }
}


const Button = props => (
  <div className= {`NumBtns ${btnType(props.children)}`} id={props.id}
  onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
)

const Screen = (props) => {
  return (<div className = "screen">{props.screen}</div>)
  
}

const ClearButton = (props) => {
return (<div className = {`NumBtns ${btnType(props.children)}`} onClick={props.handleClear}>{props.children}</div>)
}

class Numpad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  };

  handleEqual = () => {
    this.setState({input: evaluate(this.state.input)})
  }
  
  
render(){
  return (
    <div className="App">
      <div className="calcScreen"><Screen screen={this.state.input} /></div>
      <div className="Numgrid">
        <ClearButton handleClear={()=> this.setState({input: ''})}>Clear</ClearButton>
        <Button handleClick={this.addToInput}>/</Button>
        <Button handleClick={this.addToInput}>7</Button>
        <Button handleClick={this.addToInput}>8</Button>
        <Button handleClick={this.addToInput}>9</Button>
        <Button handleClick={this.addToInput}>*</Button>
        <Button handleClick={this.addToInput}>4</Button>
        <Button handleClick={this.addToInput}>5</Button>
        <Button handleClick={this.addToInput}>6</Button>
        <Button handleClick={this.addToInput}>-</Button>
        <Button handleClick={this.addToInput}>1</Button>
        <Button handleClick={this.addToInput}>2</Button>
        <Button handleClick={this.addToInput}>3</Button>
        <Button handleClick={this.addToInput}>+</Button>
        <Button handleClick={this.addToInput}>0</Button>
        <Button handleClick={this.addToInput}>.</Button>
        <Button handleClick={() => this.handleEqual()}>=</Button>

      </div>
    </div>
  )
}
  
}




function App() {
  return (
  <div className="App">
    <div>
      <h1> This is a calculator app</h1>
    </div>
    <div className="centerAll">
      <Calculator/>
    </div>
    </div>
  );
}

export default App;
