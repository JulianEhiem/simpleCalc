import { useState, Component } from 'react';
import './App.css';

// function ToOutput() {
//   const [out, setOut] = useState(9);
//   return (
//     <>
//       <p className="screenOutput">0</p>
//     </>
//   )

// }

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
    
  }else if(x === '+'||x === '-'||x === '/'||x === 'x'||x === '='){
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
      case 'x':
        btnClass = 'MainOps times'
        break;
      case '=':
        btnClass = 'MainOps equals'
        break;
    }
    return btnClass;
  }else if(x === 'AC'||x === '+/-'||x === '%'){
    switch(x) {
      case 'AC':
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
  <div className= {`NumBtns ${btnType(props.children)}`} id={props.id} onClick = {() => props.handleClick()}>
    {props.children}
  </div>
)

class Numpad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = (x) => {
    this.setState({input: this.state.input + {x}});
  }
    
  
render(){
  return (
    <div className="App">
      <div className="calcScreen"><p className="screenOutput">{this.state.input}</p><p className ="operation">+</p></div>
      <div className="Numgrid">
        <Button>AC</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button>/</Button>
        <Button handleClick={this.addToInput(7)} id='7'>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>

      </div>
    </div>
  )
}
  
}




function App() {
  return (
    <>
    <div className="App">
      <h1> This is a calculator app</h1>
    </div>
    <div className="centerAll">
      <Calculator/>
    </div>
    </>
  );
}

export default App;
