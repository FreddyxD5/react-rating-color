import logo from './logo.svg';
import './App.css';
import { FixedSizeList } from 'react-window';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {faker} from "@faker-js/faker"

// import useAnyKeyToRender from "./components/hooks/force-render-hooks"
// import WordCount from "./components/WordCount/WordCount"
// // import Cat from "./components/Cat"
// // import { PureCat } from './components/Cat';
// // import GitHubUser from './components/users/UserData'
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
// function App(){
//   const [cats, setCats] = useState(["Biscuit","Jungle","Outlaw"])
//   return (
//     <>
//     {cats.map((name,i)=>(
//       <PureCat key={i} name={name} meow={name=>console.log(`${name} has meowed`)}/>
//     ))}
//     <button onClick={()=>setCats([...cats, prompt("Name a Cat")])}>
//       Add a Cat
//     </button>
//     </>
//   )


// }
// function App(){
//   return <GitHubUser login="Moonhighway" />
// }
const tahoe_peaks = [
  {name:"Freel Peak", elevation:10891},
  {name:"Monument Park", elevation:10067},
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
]

function List({data=[],renderItem, renderEmpty }){
  return !data.length ? (renderEmpty) :(
    <ul>
      {data.map((item, i)=>(
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
// function App(){
//   return <List 
//             data={tahoe_peaks}
//             renderEmpty={<p>This list is empty</p>}
//             renderItem={item=>(
//               <>
//               {item.name} - {item.elevation.toLocalz|eString()}ft
//               </>
//             )}
//             />
// }


const bigList = [...Array(5000)].map(()=>({
  name:faker.name.findName(),
  email:faker.internet.email(),
  avatar:faker.image.avatar()
}))

function App(){
  const renderRow = ({index, style})=>(
    <div style={{...style, ...{display:"flex"} }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
      <p>
        {bigList[index].name}-{bigList[index].email}
      </p>
    </div>
  )
  return <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth - 20}
            itemCount={bigList.length}
            itemSize={50}          
            >
            {renderRow}
            </FixedSizeList>
}


export default App; 
