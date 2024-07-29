import RestorentCard from "./RestorentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { RES_ITEM_API } from "../utils/constants";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        RES_ITEM_API );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      const restaurantData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
    } catch (e) {
      console.error("Failed to fetch:", e);
      setErrorMessage("Failed to fetch restaurant data. Please try again later.");
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴Offline, please check your internet connection!!</h1>;
  }

  if (!restaurants.length) return <Shimmer />;

  function searchData(searchText, restaurants) {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No match result found");
      }
    } else {
      setFilteredRestaurants(restaurants);
      setErrorMessage("");
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="searchItem"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="button"
          onClick={() => searchData(searchText, restaurants)}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <Link id="restaurant-link" key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
            <RestorentCard key={restaurant?.info?.id} {...restaurant?.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
