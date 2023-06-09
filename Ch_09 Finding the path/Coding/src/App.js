import React from "react";
import  ReactDOM ,{createRoot} from "react-dom/client";
import HeaderComponent  from "../Component/HeaderComponent";
import Body  from "../Component/Body";
import Footer from "../Component/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "../Component/About";
import ErrorPage from "../Component/ErrorPage";
import ContactUs from "../Component/ContactUs";
import RestrauDetail from "../Component/RestrauDetails";




// default and named export 

// AppLayout component to show: Header, Body, Footer
const AppLayout = () =>{
   return(
      <>
      <HeaderComponent />
      <Outlet />
      <Footer />
      </>
   );
}

const appBrowser=createBrowserRouter(
   [
      {
         path:'/',
         element:<AppLayout />,
         errorElement:<ErrorPage/>,
         children:[
            {
               path:"/",
               element:<Body/>   
            },
            {
               path:"/aboutus",
               element:<About />
            },
            {
               path:"/contactus",
               element:<ContactUs />
            },
            {
               path:"/restaurant/:id",
               element:<RestrauDetail /> 

            }

         ]
      },
     
   ]
)
// selected the root element 
const root = ReactDOM.createRoot(document.getElementById("root"));
// here we render this on our page 
root.render(<RouterProvider router={appBrowser} />);          