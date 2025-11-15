import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9745385&lng=77.6805538&restaurantId=613822"
    );
    const response = await data.json();
    setResInfo(response);
  };
  console.log("Restaurant Menu Info:", resInfo);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {/* <h1>{resInfo?.cards[0]?.card?.card?.info}</h1> */}
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani </li>
        <li>Burgers</li>
        <li>Diet </li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
