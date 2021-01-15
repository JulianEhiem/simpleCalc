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
      <div className="calcScreen"><p className="screenOutput">0</p><p className ="operation">+</p></div>
    </>
  )
}
function Numpad(){
  return (
    <div className="centerAll">
      <div className="Numgrid">
        <button className="clear"><div className=" NumBtns SpecialOps"><h4 className = "btnText">AC</h4></div></button>
        <button className="negate"><div className=" NumBtns SpecialOps"><h4 className = "btnText">+/-</h4></div></button>
        <button className="percent"><div className=" NumBtns SpecialOps"><h4 className = "btnText">%</h4></div></button>
        <button className="divide"><div className=" NumBtns MainOps"><h4 className = "btnText">/</h4></div></button>
        <button className="seven"><div className=" NumBtns Numbers"><h4 className = "btnText">7</h4></div></button>
        <button className="eight"><div className=" NumBtns Numbers"><h4 className = "btnText">8</h4></div></button>
        <button className="nine"><div className=" NumBtns Numbers"><h4 className = "btnText">9</h4></div></button>
        <button className="times"><div className=" NumBtns MainOps"><h4 className = "btnText">x</h4></div></button>
        <button className="four"><div className=" NumBtns Numbers"><h4 className = "btnText">4</h4></div></button>
        <button className="five"><div className=" NumBtns Numbers"><h4 className = "btnText">5</h4></div></button>
        <button className="six"><div className=" NumBtns Numbers"><h4 className = "btnText">6</h4></div></button>
        <button className="minus"><div className=" NumBtns MainOps"><h4 className = "btnText">-</h4></div></button>
        <button className="one"><div className=" NumBtns Numbers"><h4 className = "btnText">1</h4></div></button>
        <button className="two"><div className=" NumBtns Numbers"><h4 className = "btnText">2</h4></div></button>
        <button className="three"><div className=" NumBtns Numbers"><h4 className = "btnText">3</h4></div></button>
        <button className="plus"><div className=" NumBtns MainOps"><h4 className = "btnText">+</h4></div></button>
        <button className="zero"><div className=" NumBtns Numbers"><h4 className = "btnText">0</h4></div></button>
        <button className="dot"><div className=" NumBtns Numbers"><h4 className = "btnText">.</h4></div></button>
        <button className="equals"><div className=" NumBtns MainOps"><h4 className = "btnText">=</h4></div></button>


      </div>
    </div>
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
