import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
    <h1>Custom App !</h1>
    </div>
  )
}
// const ReactElement = { 
//   type: `a`,
//   props:{
//     href:"https:/google.com",
//     target:`-blank`
//   },
//   children:`Click me to visit google`

// }
 const anotherUser = `chai or react`
 const anotherElement = (
  <a href="https:/google.com" target='_blank'>visit google</a>
)
const reactElement = React.createElement(
  `a`,
  {href: `https://google.com`, target:`_blank`},`click me to visit`,anotherUser
 )

ReactDom.createRoot(document.getElementById('root')).render(
  
   reactElement
  
)
