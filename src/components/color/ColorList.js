import React, { useContext } from "react";
import Color from "./Color"
import { useColors } from "../contexts/ColorProvider";

// export default function ColorList(){
//     const {colors} = useContext(ColorContext)
//     if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>
//     return (
//         <div className="color-list">
//             {colors.map(color=>(
//                 <Color  
//                         key={color.id}
//                         {...color}                        
//                 />
//                 )
//             )}
//         </div>
//     )
// }

export default function ColorList(){
    const {colors, addColor} = useColors();    
    
    if(!colors.length) return <div>No Colors listed.(Add a Color)</div>
    return (                
            <div className="color-list">
            {colors.map(color=>(
                <Color key={color.id} {...color}/>
            ))}
            </div>
        )        
}