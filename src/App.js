import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import colorData from './data/color-data.json'
import ColorList from './components/color/ColorList'
import AddColorForm from './components/color/AddColorForm';
import {v4} from "uuid"



// function App() {
//   cosnt [color] = useState(colorData)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />                        
//         <div>
//           <StarRating style={{backgroundColor:"lighblue"}}
//                       totalStars={5}
//                       onDoubleClick={e => alert("Do do do do double click")} 
//           />
//         </div>
        
//       </header>
//     </div>
//   );
// }


function App() {
  const [colors, setColors] = useState(colorData);
  return (
      <>
          <AddColorForm 
            onNewColor={(title, color)=>{
              const newColors = [
                ...colors,
                {
                  id: v4(),
                  rating: 0,
                  title,
                  color
                }
              ];
              setColors(newColors)
            }}
          />
          <ColorList 
            colors={colors}
            onRateColor = {(id, rating) => {
              const newColors = colors.map(color => color.id ===id ? {...color, rating} : color)
              setColors(newColors)
            }}
            onRemoveColor={id =>{
              const newColors = colors.filter(color =>color.id !== id);
              setColors(newColors)
            }}
          />          
      </>
    )
}

export default App;
