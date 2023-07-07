import { useContext } from "react";
import UserContext from "../Util/userContext";
// footer
const Footer =() =>{
   const {userData}=useContext(UserContext);
    return(
       <>
       <h1>This is the foooter section  </h1>  
       <span>{userData.DummyName}</span>

       </>
    );
 }

 export default Footer;