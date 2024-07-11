import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurant=(id)=>{
  const [restaurant,setRestaurant]=useState(null);

  // Get data from API
    useEffect(()=>{
        getRestaurantsInfo();
    },[]);

    async function getRestaurantsInfo(){
        try{
        const data=await fetch(
         MENU_API+id
        );
        const json=await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    catch(e){
        console.error(e);
    }}
  // return retraunt Data
  return restaurant;
};
export default useRestaurant;