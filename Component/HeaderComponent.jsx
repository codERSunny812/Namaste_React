// Header component for header section: Logo, Nav Items
import Title from "../Component/Title";
const HeaderComponent =()=>{
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
       </div>
    );
 }

 export default HeaderComponent;