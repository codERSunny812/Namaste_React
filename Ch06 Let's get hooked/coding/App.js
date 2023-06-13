import React from "react";
import  ReactDOM ,{createRoot} from "react-dom";
import HeaderComponent  from "../Component/HeaderComponent";
import Body  from "../Component/Body";
import Footer from "../Component/Footer";



// default and named export 

// AppLayout component to show: Header, Body, Footer
const AppLayout = () =>{
   return(
      <>
      <HeaderComponent />
      <Body />
      <Footer />
      </>
   );
}
// selected the root element 
const root = ReactDOM.createRoot(document.getElementById("root"));
// here we render this on our page 
root.render(<AppLayout />);          