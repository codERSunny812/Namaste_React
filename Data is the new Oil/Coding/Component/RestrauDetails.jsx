import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../Util/useMenu";
import ShimmerUi from "./ShimmerUi";
const RestrauDetail = () =>{
  const {id}=useParams();
  const restaurant = useMenu(id);
  
  return !restaurant?
 ( <ShimmerUi /> )
   :(
    <div className="menu">
      <div className="">
      <h1>Restaurant id :{id} </h1>
      <h2>{restaurant.name}</h2>
      <h2>{restaurant.area}</h2>
      <h2>{restaurant.city}</h2> 
      </div>
    </div>

  );
}

export default RestrauDetail;