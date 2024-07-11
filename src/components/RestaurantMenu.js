// RestaurantMenu.js
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constraints";
import useRestaurant from "../utils/useRestaurants";
import { useCart } from '../utils/CartContext';

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const { addToCart, setDeliveryCharge } = useCart();

  const { name, areaName, city, cloudinaryImageId, avgRating, feeDetails } = restaurant?.cards[2]?.card?.card?.info || {};
  const cardItems = restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

  useEffect(() => {
    if (feeDetails && feeDetails.totalFee) {
      setDeliveryCharge(feeDetails.totalFee / 100); // Assuming feeDetails.totalFee is in paise
    } else {
      setDeliveryCharge(0);
    }
  }, [feeDetails, setDeliveryCharge]);

  return (
    <>
      <div className="resDes">
        <h1>Restaurant ID: {id}</h1>
        <h1>{name}</h1>
        <div className="ImgGrp" style={{ display: "flex", justifyContent: "space-between" }}>
          <img className="Menuimg" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
          <div>
            <h3>{areaName}</h3>
            <h3>{city}</h3>
            <h3 className={avgRating < 4 ? 'low-rating' : 'high-rating'}>
              {avgRating} ⭐
            </h3>
            {feeDetails && feeDetails.message ? (
              <h3 dangerouslySetInnerHTML={{ __html: feeDetails.message }}></h3>
            ) : (
              <h3>No delivery fee details available</h3>
            )}
          </div>
        </div>
      </div>
      <div className="resMenu">
        <h2>Menu</h2>
        <ul>
          {cardItems.map((item, index) => (
            <li key={index}>
              <b>{item?.title || item?.card?.info?.name} -- ₹{item?.dish?.info?.defaultPrice / 100 || item?.dish?.info?.price / 100 || item?.card?.info?.price / 100}</b> <br />
              <img
                src={IMG_CDN_URL + (item?.dish?.info?.imageId || item?.card?.info?.imageId)}
                alt={item?.title || item?.card?.info?.name}
                style={{ width: "200px", height: "200px" }}
              /> <br />
              <button onClick={() => addToCart({
                id: item?.dish?.info?.id || item?.card?.info?.id,
                name: item?.title || item?.card?.info?.name,
                price: item?.dish?.info?.defaultPrice / 100 || item?.dish?.info?.price / 100 || item?.card?.info?.price / 100
              })}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
