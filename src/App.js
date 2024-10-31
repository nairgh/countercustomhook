import React from 'react'
import useCounter from './components/useCounter'
import "./App.css";
const App = () => {
  const {count, increment,decrement, reset } = useCounter(0);
   return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={increment}> Increment</button> {}
      <button onClick={decrement}> Decrement</button> {}
      <button onClick={reset}> Reset</button>
   </div>
  );
}

export default App