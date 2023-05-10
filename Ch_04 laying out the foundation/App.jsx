import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const heading=<h1>hello coder's</h1>;

// functional Component -will be used most of the time 

 const HeaderComponent= () =>{
    return(
     <>
     {heading  }
     <h1>hello im a functional Component</h1>
     </>   
    );
 }



  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(heading);
  root.render(<HeaderComponent />);