import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL + resId);
    const response = await data.json();
    setResInfo(response?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
