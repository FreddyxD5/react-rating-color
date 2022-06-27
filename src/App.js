import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import colorData from './data/color-data.json'
import ColorList from './components/color/ColorList'
import AddColorForm from './components/color/AddColorForm';
import {v4} from "uuid"


function App() {  
  return (
      <>
          <AddColorForm/>
          <ColorList/>          
      </>
    )
}

export default App;
