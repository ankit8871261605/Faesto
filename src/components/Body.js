import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
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