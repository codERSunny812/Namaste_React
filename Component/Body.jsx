import { useState } from "react";
import { restaurantList  } from "./config";
import RestrauCard from "./RestrauCard";



const Body = () =>{

   // const newKeyWord="KFC";
   const [newKeyWord , setNewKeyWord]=useState();
   const [restrau, setrestrau]=useState(restaurantList);
   console.log(restrau);
   // now we have to apply the filter algorithm
   function filterData(setNewKeyWord,restrau){
      console.log(restrau);
     const filterData = (restrau) =>{
         console.log(restrau.data.name);
         restrau.data.name.include(newKeyWord);
      }
      return filterData;
   }


    return(
      <>      
      <div className="search-container">
         <input type="text" className="search-input" 
         placeholder="search"
         value={newKeyWord} onChange={(e)=>{
            setNewKeyWord(e.target.value) ;
         }}/>
         <button className="searchbtn" onClick={ ()=>{
            // filter on click 
          const Data = filterData(setNewKeyWord,restrau);
         //  now we have to update the data 
         setrestrau(Data); 
         }}>search</button>
      </div>  
       <div className="cardInfo">
          {restrau.map((restaurant) => {
         return <RestrauCard key={restaurant.data.id} {...restaurant.data} />;
       })}
       </div>
       </>

    );
 }
 export default Body;