import './App.css';



function Calculator(){
  return (
    <>
      <Screen/>
      <Numpad/>
    </>
  )
}
function Screen(){
  return (
    <>
      <h3>This is the Screen</h3>
    </>
  )
}
function Numpad(){
  return (
    <>
      <div className="Numgrid">
        <div className="clear NumBtns SpecialOps"><h4 className = "btnText">AC</h4></div>
        <div className="negate NumBtns SpecialOps">+/-</div>
        <div className="percent NumBtns SpecialOps">%</div>
        <div className="divide NumBtns MainOps">/</div>
        <div className="seven NumBtns Numbers">7</div>
        <div className="eight NumBtns Numbers">8</div>
        <div className="nine NumBtns Numbers">9</div>
        <div className="times NumBtns MainOps">x</div>
        <div className="four NumBtns Numbers">4</div>
        <div className="five NumBtns Numbers">5</div>
        <div className="six NumBtns Numbers">6</div>
        <div className="minus NumBtns MainOps">-</div>
        <div className="one NumBtns Numbers">1</div>
        <div className="two NumBtns Numbers">2</div>
        <div className="three NumBtns Numbers">3</div>
        <div className="plus NumBtns MainOps">+</div>
        <div className="zero NumBtns Numbers">0</div>
        <div className="dot NumBtns Numbers">.</div>
        <div className="equals NumBtns MainOps">=</div>


      </div>
    </>
  )
}




function App() {
  return (
    <>
    <div className="App">
      <h1> This is a calculator app</h1>
    </div>
    <div>
      <Calculator/>
    </div>
    </>
  );
}

export default App;
