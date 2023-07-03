import { useState , useEffect } from "react";
import { restaurantList } from "./config";
import RestrauCard from "./RestrauCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../Util/Filter";  
import useRestrauList from "../Util/useRestrauList";
import useOnline from "../Util/useonline";

 
// Body Component for body section: It contain all restaurant cards
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setfilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const restaurantList = useRestrauList(allRestaurants,filteredrestaurants);

 // conditional rendering 
// if the restrauant is empty then show shimmer ui
// and if the restaurant is not empty then show the actual data ui 

// to check the internet status like 
// if user is online then show the RestrauCard else show no internet acess 

const isOnline = useOnline();

if(!isOnline){
  return <h1>Oops something went wrong , check your internet connection </h1>
}

// for searching of the restaurant 
 // if allRestaurants is empty don't render restaurants cards
 if (!allRestaurants) return null;
  
  return (
    <>
      <div className="search-container">
      <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            // filter the data
          <filterData p1={searchText} p2={allRestaurants} />
          }}
        >
          Search
          </button>

      </div>

      {/* restaurant card info  */}
      
{allRestaurants?.length === 0 ? (
  <ShimmerUi/>
) : (
  <div className="cardInfo">
    {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
    {filteredrestaurants.map((restaurant) => {
      return (
        <Link
          to={"/restaurant/" + restaurant.data.id}
          key={restaurant.data.id} className="link"
        >
          <RestrauCard {...restaurant.data} />
        </Link>
      );
    })}
  </div>
)}
</>
);
};
export default Body;  
