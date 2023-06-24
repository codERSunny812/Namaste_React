// Header component for header section: Logo, Nav Items
import { useState } from "react";
import Title from "../Component/Title";
const HeaderComponent =()=>{
   const [isLoggedIn,setIsLoggedIn]=useState(true);
    return(
       <div className="header">
          <Title />
          <div className="nav-items">
             <ul>
                <li>home </li>
                <li>about us</li>
                <li>contact us </li>
                <li>cart </li>
             </ul>
             </div> 
             {
              isLoggedIn?( 
               <button onClick={()=>{
                  setIsLoggedIn(false)
               }}>Log In</button>
              ):(
               <button onClick={()=>{
                  setIsLoggedIn(true)
               }}>Log Out </button>
              )
             } 
       </div>
    );
 }

 export default HeaderComponent;