import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestrauDetail = () =>{
  const [menu,setMenu]=useState();
  const Param=useParams();
  console.log(Param); //here we get our id 
  const {id}=Param;

  useEffect(
    ()=>{
      getRestaurantData();
    }
  ,[])

  async function getRestaurantData(){
    let data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.803955&lng=80.904385&restaurantId="+id);
    const json= await data.json();
    console.log(json.data.cards); 

  }
  return(
    <div>
      <h1>Restaurant </h1>
    </div>

  );
}

export default RestrauDetail;