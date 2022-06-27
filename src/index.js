import React, {createContext} from 'react';
import {render} from "react-dom";
import './index.css';
import App from './App';
import { ColorProvider } from "./components/contexts/ColorProvider"
import reportWebVitals from './reportWebVitals';

render(
    <ColorProvider>
      <App/>
    </ColorProvider>,
    document.getElementById("root")
);

// export const ColorContext = createContext();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ColorContext.Provider value={{colors}}>
//     <App />
//   </ColorContext.Provider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
