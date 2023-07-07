// Header component for header section: Logo, Nav Items
import { useState, useContext } from "react";
import Title from "../Component/Title";
import { Link } from "react-router-dom";
import UserContext from "../Util/userContext";
const HeaderComponent =()=>{

   const { userData} =useContext(UserContext);
   console.log( userData);
   const [isLoggedIn,setIsLoggedIn]=useState(true);
    return(
       <div className="header flex justify-between bg-purple-700 ">
          <Title />
          <div className="nav-items">
             <ul className="flex py-10 px-2">
               <Link to="/" className="link"> <li className="px-2">home</li></Link>
                {/* <li><Link to="/">Home</Link> </li> */}
                <Link to="/aboutus" className="link"><li className="px-2">about us</li></Link>
               <Link to="/contactus" className="link"><li className="px-2">contact us </li></Link> 
               <Link to="/instaCart" className="link"><li className="px-2">instaCart </li></Link>
               <span className="text-red-800 border-l-orange-500">{userData.DummyName}</span>
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