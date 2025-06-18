import { useState , useCallback} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllopwed, setCharAllowed] = useState(false)
  const [password,setPassword]= useState(false)
  const [passwordGenerator] = useCallback(() =>{
    let pass=""
    let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str =+ "0123456789"
    if(charAllowed) str += "&$@1#^-_=[]{}~`"

     for(let i = 1; i <= Array.length; i++){
    let char = Math.flor(Math.random() * str.length + 1)
    pass = str.charAt(char) 
  }
  setPassword(pass)
  },[length,numberAllowed,charAllopwed,setPassword])

   
  return (
    <>
    <h1 className="text-4xl text-center text-w ">passwordGenerator</h1>
    </>
  )
}

export default App
