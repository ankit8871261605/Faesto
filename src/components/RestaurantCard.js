import {CDN_URL} from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restaurant.info;

  const img = `${CDN_URL}${cloudinaryImageId}`;

  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" src={img} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;