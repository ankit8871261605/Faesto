import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *      - Restaurant Cards
 *           - img
 *           - Name of restaurant, star rating, cuisine, delivery time
 * Footer
 * - Copyrights
 * - Links
 * - Address
 * - Contact
*/

const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/010/072/506/original/fast-food-delivery-logo-food-delivery-logo-design-template-vector.jpg" alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li> 
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  );
}

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
        <img className="restaurant-logo" src="https://im.whatshot.in/img/2021/Mar/header3-1615920876.jpg" alt="Restaurant Logo" />
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>4.4 starts</h4>
        <h4>38 mins</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
          <RestaurantCard />
           <RestaurantCard />
            <RestaurantCard />
             <RestaurantCard />
              <RestaurantCard />
        </div>

    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
        <Header/>
        <Body />
    </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
 