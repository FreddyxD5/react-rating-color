import React, { useState, useEffect } from "react";


function Checkbox(){
    const [checked, setChecked] = useState(false);

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
                onChange = {()=>setChecked(checked=> !checked)}
            />
            {checked ? "checked":"not checked"}
        </>
    )
}