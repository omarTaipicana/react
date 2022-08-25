import './App.css'
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    // let counter = 0
  
    const increment = () => {
      // alert("Me incrementé")
      setCounter(counter + 1);
      // counter = counter + 1
    };
  
    const decrement = () => {
      setCounter(counter - 1);
    };
  
    const reset = () => {
      setCounter(0);
      // counter = 0
    };
  
    return (
      <div className="App">
        <h1>{counter}</h1>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  
  export default App;