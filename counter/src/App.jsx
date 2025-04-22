import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

const [counter,setCounter] = useState(0)
  const addvalue = () =>{
    // counter = counter + 1
  //  setCounter(counter+1)
    setCounter(prevCounter => prevCounter + 1) //It’s called the functional update form, and it works even when React batches state updates.
    setCounter(prevCounter => prevCounter  + 1)
  
    // console.log("clicked", counter)
  }
  // const removeValue = () =>{
  //  setCounter(counter -1 )
  //    if(removeValue <= 0){
  //       return 0;
  //  }

  //   setCounter(removeValue  - 1 )
  //   // setCounter(prevCounter => prevCounter -1 )

    
  // }

  const removeValue = () => {
    setCounter(prev => {
      const newValue = prev - 2;
      return newValue < 0 ? 0 : newValue;
    });
  };
  
  
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
