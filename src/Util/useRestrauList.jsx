import { useState,useEffect } from "react";
const useRestrauList = (prop1,prop2) =>{
    const [allRestaurants, setAllRestaurants] = useState([prop1]);
  const [filteredrestaurants, setfilteredRestaurants] = useState([prop2]);

  useEffect(()=>{
    // Api Call
  getRestrauData();
    },[])

    // async function getRestaurant to fetch Swiggy API data
  async function getRestrauData(){
    try {
    const data= await fetch(restaurantListApi);
    const dataGet= await data.json();
    // console.log(dataGet);
    console.log(dataGet.data.cards[2].data.data.cards);
    setAllRestaurants(dataGet?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(dataGet?.data?.cards[2]?.data?.data?.cards);
      
    } catch (error) {
      console.log(error);
      
    }
    

  }
//   what it will return  find out 
  return filteredrestaurants;

}
export default useRestrauList;