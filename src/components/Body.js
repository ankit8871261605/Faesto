import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState }  from "react";

const Body = () => {

const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter-btn-container">
        <button 
          className="filter-btn" 
          onClick={()=>{
          const topRatedRestaurants = restaurantList.filter(
            (restaurant) => restaurant.info.avgRating > 4.3
          );
          console.log(topRatedRestaurants);
          setRestaurants(topRatedRestaurants);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;