import { React,Component } from 'react';
import './App.css';
import { evaluate }  from 'mathjs';
import {Button, ClearButton} from './Button';
import Screen from './Screen';

class Numpad extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        input: "",
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
  

export default Numpad;