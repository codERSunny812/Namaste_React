import React from "react";
import { Outlet } from "react-router-dom";
const About=()=>{
    return(
        <>
        <h1>this is about section </h1>
        <p>
            { " "}
            This is the chapter 9 of the namaste react course .
        </p>
        <Outlet />
        </>
    );
}

export default About;