import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../Util/useMenu";
const RestrauDetail = () =>{
  console.log(Param); //here we get our id 
  const {id}=Param;
  const [menu,setMenu]=useState();
  const restaurant = useMenu(id);
 

  
  return(
    <div>
      <h1>Restaurant </h1>
    </div>

  );
}

export default RestrauDetail;