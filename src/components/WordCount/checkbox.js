import React, { useState, useEffect, useReducer } from "react";


function Checkbox(){
    const [checked, setChecked] = useReducer(checked=>!checked, false);
    

    function toggle(){
        setChecked(checked=>!checked)
    }

    useEffect (()=>{
        alert(`checked ${checked.toString()}`)
        console.log(checked ? "Yep, checked": "Nop, not checked")
        localStorage.setItem("checkbox-value", checked)
        // txtInputRef.current.focus();
    });
    

    return (
        <>
            <input
                type="checkbox"
                value = {checked}
                onChange = {toggle}
            />
            {checked ? "checked":"not checked"}
        </>
    )
}