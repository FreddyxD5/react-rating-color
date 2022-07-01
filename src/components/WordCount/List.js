import React from "react";
function List({data=[], renderEmpty}){
    if (!data.length) return renderEmpty;
    return <p>{data.length} items</p>
}