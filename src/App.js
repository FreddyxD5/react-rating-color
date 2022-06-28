import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import useAnyKeyToRender from "./components/hooks/force-render-hooks"
import WordCount from "./components/WordCount/WordCount"
import Cat from "./components/Cat"
import { PureCat } from './components/Cat';
// import colorData from './data/color-data.json'
// import ColorList from './components/color/ColorList'
// import AddColorForm from './components/color/AddColorForm';
// import {v4} from "uuid"



//Colors App
// function App() {  
//   return (
//       <>
//           <AddColorForm/>
//           <ColorList/>          
//       </>
//     )
// }

// function App(){  
//   useAnyKeyToRender();

  
//   useEffect(()=>{
//     console.log("Fresh render xd")
//   },[words])

//   return (
//     <h1>Open the console</h1>
//   )
// }

// function App(){
//   return (
//     <>
//       <WordCount>I know the time goes by</WordCount> 
//     </>
//   )
// }
function App(){
  const [cats, setCats] = useState(["Biscuit","Jungle","Outlaw"])
  return (
    <>
    {cats.map((name,i)=>(
      <PureCat key={i} name={name} meow={name=>console.log(`${name} has meowed`)}/>
    ))}
    <button onClick={()=>setCats([...cats, prompt("Name a Cat")])}>
      Add a Cat
    </button>
    </>
  )


}

export default App; 
