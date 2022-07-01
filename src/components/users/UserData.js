import React, { useState, useEffect } from "react";
import useFetch from "../hooks/FetchData"
import Fetch from "../hooks/Fetch"
import LoadingSpinner from "../LoadingSpinner";
// const loadJSON = key=>
//         key && JSON.parse(localStorage.getItem(key));
    
// const saveJSON = (key, data)=>
//         localStorage.setItem(key, JSON.stringify(data));

export default function GitHubUser({ login }){    
    return (
        <Fetch 
            uri={`https://api.github.com/users/${login}`}
            loadingFallback={<LoadingSpinner />}
            renderError={error=>{
                //handle error
                return <p>somethinf went wrong... {error.message}</p>
            }}
            renderSuccess={UserDetails}/>
        
    );
}


function UserDetails({ data }){        
    return(
        <>
        <div className="githubUser">
            <img 
                src={data.avatar_url}
                alt={data.login}
                style={{width:200}}
                />
                <div>
                    <h1>{data.login}</h1>
                    {data.name && <p>{data.name}</p>}
                    {data.location && <p>{data.location}</p>}
                </div>                
        </div>    
        </>
        );
}