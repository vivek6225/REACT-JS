import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
 
  const [count, setCount] = useState(0)
  let myObj = {
    useranme : "vivek kumar gupta",
    age :23,
    branch:"information teacnology",
  }
  let newArr = [1,2,3,4]

  return (
<>
<h1 className="text-red-500 p-9 rounded-xl m-9 border-4 ">vivek kumar gupta</h1>
<Card username="vivek" btnText="click me"/>
<Card username="vivek"/>






</>
     
     


  
   
      
  
  )
}

export default App
