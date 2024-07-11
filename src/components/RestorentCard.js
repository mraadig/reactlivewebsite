import { IMG_CDN_URL } from "../../constraints";

const RestorentCard=({
    cloudinaryImageId,
    name,
    cuisines,
     sla,
     areaName,
     avgRatingString,
     costForTwo})=>{
    return(
      <div className="card">
        <img className="cardimg" src={IMG_CDN_URL+cloudinaryImageId} />
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <h4>
          {sla.deliveryTime} minutes
        </h4>
        <h5>{areaName}</h5>
        
        <h4
          style={{
            marginTop:"2px",
            display: "inline-block",
            padding: "5px 5px",
            backgroundColor: avgRatingString < 4 ? "var(--light-red)" : "var(--light-green)",
            color: avgRatingString < 4 ? "black" : "white",
            borderRadius: "5px",
          }}
        >
          {avgRatingString} ⭐
        </h4>
        <h4>•{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•{costForTwo ?? "₹200 for two"}</h4>
        
      </div>
    )
  }

  export default RestorentCard;