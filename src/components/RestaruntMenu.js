import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import axios from "axios";

const RestaruntMenu = () => {
  const [resData, setResData] = useState();
  const [resItem, setResItem] = useState();
  const [category, setCategory] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const restaurantData = resInfo?.cards[2]?.card?.card?.info;
  const resMenuItem =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card
      ?.itemCards;
  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const { name, cuisines } = restaurantData || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">{(cuisines || []).join(", ")}</p>
      {itemCategory?.map((c, index) => (
        <RestaurantCategory
          key={index}
          data={c?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaruntMenu;
