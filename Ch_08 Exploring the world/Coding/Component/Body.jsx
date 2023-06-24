import { useState , useEffect } from "react";
import { restaurantList } from "./config";
import RestrauCard from "./RestrauCard";
import ShimmerUi from "./ShimmerUi";

// Filter the restaurant data according  to the input type
function filterData(searchText, restaurants) {
   const filterData = restaurants.filter((restaurant) =>
     restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
   );
   return filterData;
 }
 
// Body Component for body section: It contain all restaurant cards
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setfilteredRestaurants] = useState([]);


 // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(()=>{
  // Api Call
getRestrauData();
  },[])
  // async function getRestaurant to fetch Swiggy API data
  async function getRestrauData(){
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const dataGet= await data.json();
    console.log(dataGet);
    console.log(dataGet.data.cards[2].data.data.cards);
    setAllRestaurants(dataGet?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(dataGet?.data?.cards[2]?.data?.data?.cards);
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setfilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setfilteredRestaurants(restaurants);
    }
  };


// conditional rendering 
// if the restrauant is empty then show shimmer ui
// and if the restaurant is not empty then show the actual data ui 




 // if allRestaurants is empty don't render restaurants cards
 if (!allRestaurants) return null;
  return (allRestaurants.length===0)?<ShimmerUi/> :(
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
            searchData(filterData(searchText, allRestaurants));
          }}
        >
          Search
          </button>

      </div>

      <div className="cardInfo">
        {/* how the map function work  */}
        {filteredrestaurants.map((restaurant) => {
          return <RestrauCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
