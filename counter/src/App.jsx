import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

const [counter,setCounter] = useState(15)
  const addvalue = () =>{
   
    setCounter(counter+1)
    // console.log("clicked", counter)
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  
  return (
    <>
  <h1>counter value:{counter}</h1>
  <button 
  onClick={addvalue}
  >Add value {counter}</button>
  <br />
  <button
  onClick={removeValue}
  >remove value {counter}</button>
  <p>footer:{counter}</p>

        
      
    </>
  )
}

export default App
