import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Util/useOnlineStatus";

const Header = () => {
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
};

export default Header;