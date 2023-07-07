import { useState, useEffect
 } from "react";
import { menuFetchUrl } from "../Component/config";
const useMenu = (id)=>{
  const [rest , setRest]=useState(null);
  const Param=useParams();

  // get data from api 
    useEffect(
        ()=>{
          getRestaurantData();
        }
      ,[])
    
      async function getRestaurantData(){
        let data= await fetch(menuFetchUrl+id);
        const json= await data.json();
        console.log(json.data.cards); 
        setRest(json.data.cards);
    
      }
// return restaurant data 
      return rest;
}

export default useMenu;