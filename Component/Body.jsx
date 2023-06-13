import { useState } from "react";
import { restaurantList } from "./config";
import RestrauCard from "./RestrauCard";

// now we have to apply the filter algorithm
function filterData(newKeyWord, restrauntData) {
   const filterDataGet = restrauntData.filter(
      (res) =>{
    res.data.name.includes(newKeyWord);
   }
  );
  return filterDataGet;
  
 }

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [newKeyWord, setNewKeyWord] = useState(" ");
  const [restrauntData, setrestrautData] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={newKeyWord}
          onChange={(e) => {
            setNewKeyWord(e.target.value);
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            // filter on click
            const data = filterData(newKeyWord, restrauntData);
            // update the state of restaurants list
            setrestrautData(data);
          }}
        >
          search
        </button>

      </div>

      <div className="cardInfo">
        {/* how the map function work  */}
        {restrauntData.map((restaurant) => {
          return <RestrauCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
