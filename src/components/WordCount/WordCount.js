import React,{useEffect, useMemo} from "react";
import useAnyKeyToRender from "../hooks/force-render-hooks";

export default function WordCount({children=""}){
    useAnyKeyToRender();
    
    const words = useMemo(()=>children.split(" "), [children]) 
    // const words = useMemo(()=>{
    //     const words = children.split(" ")
    //     return words
    // },[])

    useEffect(()=>{
        console.log("fresh render");

    }, [words])

    return (
        <>
            <p> {children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    )
}