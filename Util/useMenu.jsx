import { useState } from "react";

const useMenu = (id)=>{
    const [rest , setRest]=useState(null);
    const Param=useParams();

    useEffect(
        ()=>{
          getRestaurantData();
        }
      ,[])
    
      async function getRestaurantData(){
        let data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.803955&lng=80.904385&restaurantId="+id);
        const json= await data.json();
        console.log(json.data.cards); 
        setRest(json.data.cards);
    
      }
// return restaurant data 
      return rest;
}

export default useMenu;