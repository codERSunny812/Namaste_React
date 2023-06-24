import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageId } from "./config";
import ShimmerUi from './ShimmerUi';


const RestrauDetail= () =>{
    const param = useParams();
    const {id}=param;
    // const [restaurantDataDetail, setRestaurantDataDetail]=useState({});
    // this will not build coz at initial render our restaurantDataDetail is empty 
    const [restaurantDataDetail, setRestaurantDataDetail]=useState(null);

    // console.log(restaurantDataDetail);
    useEffect(()=>{
        getRestaurantData();

    },[]);
    async function getRestaurantData(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.803955&lng=80.904385&restaurantId=705661" + id);
        const json= await data.json();
        console.log(json.data);
        setRestaurantDataDetail(json.data);

    }

    return !restaurantDataDetail?<ShimmerUi/>: (
      <div className="RestraDetail">
        {/* restaurantDataDetail section  */}
        <div>
          <h6>restaurant id : {id}</h6>
          <h1>Restaurant name :{restaurantDataDetail.name} </h1>
        <img  src={ImageId + restaurantDataDetail.cloudarniaryImageId}/>
        <h3>{restaurantDataDetail.area}</h3>
        <h3>{restaurantDataDetail.city}</h3>
        <h3>{restaurantDataDetail.avgrating}</h3>
        </div>
        {/* menu section  */}
        <div>
          <h2>Menu</h2>
          <ul>
            {Object.values(restaurantDataDetail.menu.item).map((items)=>{return ( <li key={items.id}>{items.name}</li>)})}
          </ul>
        </div>
        
      </div>  
    );
}
export default RestrauDetail;