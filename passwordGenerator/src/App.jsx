import { useState , useCallback} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllopwed, setCharAllowed] = useState(false)
  const [password,setPassword]= useState(false)
  const [passwordGenerator] = useCallback(() =>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "&$@!#^-_=[]{}~`"

     for(let i = 1; i <= Array.length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char) //  accesses the character at that index.
  }
  setPassword(pass)
  },[length,numberAllowed,charAllopwed,setPassword])

   
  return (
    <>
   <div classname="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray"></div>
    </>
  )
}

export default App
