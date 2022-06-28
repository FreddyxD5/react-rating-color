import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import colorData from './data/color-data.json'
import ColorList from './components/color/ColorList'
import AddColorForm from './components/color/AddColorForm';
import {v4} from "uuid"



//Colors App
// function App() {  
//   return (
//       <>
//           <AddColorForm/>
//           <ColorList/>          
//       </>
//     )
// }

function App(){
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("Example Phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };  

  useEffect(() => {
    console.log(`Typing ${val}`) 
  },[val])

  useEffect(()=>{
    console.log(`saved phrase: ${phrase}`)
  },[phrase])

  useEffect(()=>{
    console.log("Only once after initial state render")
  }, [])

  useEffect(()=>{
    welcomeChime.play();
    return ()=> goodbyeChime.play();
  },[])

  return (
    <>
      <label>Favorite Phrase</label>
      <input 
        value={val}
        placeholder={phrase}
        onChange = {e => set(e.target.value)}
      />

      <button onClick={createPhrase}>send</button>
    </>
  )
  
}

export default App;
