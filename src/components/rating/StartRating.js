import React, { useState } from "react";
import Star from "./Start"



const createArray = length => [...Array(length)]


export default function StarRating({
    style={},
    totalStars = 5,
    selectedStars=0,
    onRate = f => f
    }){
    // const [selectedStars, setSelectedStars] = useState(0);    
    
    return (
        <div style={{...style}}>
        {createArray(totalStars).map((n,i)=>(
        <Star 
            key={i}
            selected={selectedStars > i}
            onSelect= {() => onRate(i+1)}
            />
        ))}
        <p>
            {selectedStars} of  {totalStars} stars
        </p>
        </div>
    )
}