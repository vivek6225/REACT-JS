import{useState} from "react";

function App() {
  
   const  [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" rounded>
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded3xl">
          <button onClick={() => setColor("red")}className="outline-none px-4 py-1 text-white rounded-full shadow-lg"style={{backgroundColor:"red"}}>red</button>
          <button onClick={() =>setColor("green")} className=" outline-none px-4 py-1 text-white rounded-full shadow-lg " style= {{backgroundColor:"green"}}>green</button>
          <button onClick={() => setColor("yellow")}className="px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
          <button  onClick={() => setColor("black")}className="outline-none px-4 py-1  rounded-full text-white "  style={{backgroundColor:"black"}} >black</button>
          
        </div>
        </div>
    </div>
  )
}

export default App

