import React from "react";
import { useRouteError } from "react-router-dom";
import Error from '../Component/images/Error.png'
 const ErrorPage=()=>{
    const err=useRouteError();
    
    return(
        <>
        <div className="error">
            <h1>Oops something went wrong !!!!</h1>
           <h1>{err.status + ":" +err.statusText}</h1>
        <img src={Error}  className="ErrorImage"/>
        
        </div>
       
        </>

    );
 }
 export default ErrorPage;