import React,{ useState, useEffect } from "react";

export function  useFetch(uri){
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(!uri) return;
        fetch(uri)
            .then(response=> response.json())
            .then(setData)
            .then(()=>setLoading(true))
            .catch(setError)
    }, [uri])

    return {
        loading,
        data,
        error
    };
}

