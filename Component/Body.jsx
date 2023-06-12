import { restaurantList  } from "./config";
import RestrauCard from "./RestrauCard";


const Body = () =>{
    return(
       <div className="cardInfo">
          {restaurantList.map((restaurant) => {
         return <RestrauCard key={restaurant.data.id} {...restaurant.data} />;
       })}
       </div>
    );
 }




 

 export default Body;