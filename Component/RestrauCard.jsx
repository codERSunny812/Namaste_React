
import { ImageId } from "./config";

const RestrauCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    costForTwoString,
    user
  }) =>{
  return (
   
   
  <div className="cards w-[200px] p-2 m-2 shadow-xl bg-[#36454F]">
     <img  src={ImageId+cloudinaryImageId}/>
     <h3 className="foodName font-bold text-white ">{name}</h3>
     <div className="rating">
        <span>{avgRating}⭐</span>
        <div className="moreInfo">
        <h3 className="time">{deliveryTime}Min</h3>
        <h3  className="rate">{costForTwoString}</h3>
        </div>
     </div>
  </div>

  
  );
  }
  

  export default RestrauCard;