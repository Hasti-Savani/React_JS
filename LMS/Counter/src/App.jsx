import './App.css'
import { useReducer, useState } from 'react'

function App() {


  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": return {count : state + 1};
      case "DECREMENT": return {count : state <= 0 ? 0 : state - 1};
      case "RESET": return {count : 0};
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(countReducer, {count : 0})


  return (
    <>
    <h1>Reducer Counter</h1>
    {state}
      <button onClick={() => {
        dispatch({ type: "INCREMENT" })
      }}>Increment</button>
      <button onClick={() => {
        dispatch({type: "DECREMENT"})
      }}>Decrement</button>
        <button onClick={() => {
        dispatch({type: "RESET"})
      }}>Reset</button>
    </>
  )
}

export default App
