import React from 'react';

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

  const ClearButton = (props) => {
    return (<div className = {`NumBtns ${btnType(props.children)}`} onClick={props.handleClear}>{props.children}</div>)
    }

  export {Button, ClearButton}
