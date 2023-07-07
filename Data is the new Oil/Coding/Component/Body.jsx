import { useState , useEffect } from "react";
import { restaurantList } from "./config";
import RestrauCard from "./RestrauCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../Util/Filter";  
import useRestrauList from "../Util/useRestrauList";


 
// Body Component for body section: It contain all restaurant cards
const Body = (user) => {
  console.log({user});
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setfilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
 


   
    useEffect(()=>{
  // Api Call
getRestrauData();
  },[])

  // async function getRestaurant to fetch Swiggy API data
  async function getRestrauData(){
    try {
      const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const dataGet= await data.json();
    console.log(dataGet.data.cards[2].data.data.cards);
    setAllRestaurants(dataGet?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(dataGet?.data?.cards[2]?.data?.data?.cards);
      
    } catch (error) {
      console.log(error);
      
    }
    

  }





 if (!allRestaurants) return null;
  
  return (
    <>
      <div className="search-container bg-pink-400 p-2 my-2">
      <input
          type="text"
          className="search-input px-2 mx2 bg-gray-200"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn border-spacing-1 rounded-lg p-1 bg-cyan-300 text-white mx-2 "
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
  <div className="cardInfo flex flex-wrap">
    {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
    {filteredrestaurants.map((restaurant) => {
      return (
        <Link
          to={"/restaurant/" + restaurant.data.id}
          key={restaurant.data.id} className="link"
        >
          <RestrauCard {...restaurant.data} data={user}/>
        </Link>
      );
    })}
  </div>
)}
</>
);
};
export default Body;  
