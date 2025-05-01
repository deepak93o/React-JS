import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1);
    } else {
      alert("Value Can't be less then zero");
      
    }
  }
  
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button id="rmv" 
      onClick={removeValue}>
      Remove Value</button>
    </>
  )
}

export default App
