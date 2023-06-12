import { ImageId } from "./Config";

const RestrauCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
    costForTwoString
  }) =>{
  return (
  <div className="cards">
     <img  src={ImageId+cloudinaryImageId}/>
     <h3 className="foodName">{name}</h3>
     <h5 className="foodCuisines">{cuisines.join()}</h5>
     <div className="rating">
        <span>{avgRating}⭐</span>
        <div className="moreInfo">
        <h3 className="time">{deliveryTime}Min</h3>
        <h3 className="rate">{costForTwoString}</h3>
        </div>
     </div>
  
  </div>
     );
  }
  

  export default RestrauCard;