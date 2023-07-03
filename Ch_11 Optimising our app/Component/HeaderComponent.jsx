// Header component for header section: Logo, Nav Items
import { useState } from "react";
import Title from "../Component/Title";
import { Link } from "react-router-dom";
const HeaderComponent =()=>{
   const [isLoggedIn,setIsLoggedIn]=useState(true);
    return(
       <div className="header">
          <Title />
          <div className="nav-items">
             <ul>
               <Link to="/" className="link"> <li>home</li></Link>
                {/* <li><Link to="/">Home</Link> </li> */}
                <Link to="/aboutus" className="link"><li>about us</li></Link>
               <Link to="/contactus" className="link"><li>contact us </li></Link> 
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