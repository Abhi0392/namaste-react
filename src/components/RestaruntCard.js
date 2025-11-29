import React, { useState } from "react";
import { IMAGE_URL } from "../utils/constant";
const RestaruntCard = (props) => {
  const info = props?.resData || {};
  const { name, avgRating, cuisines = [], sla = {}, cloudinaryImageId } = info;
  return (
    <>
      <div
        data-testid="resCard"
        className="m-4 p-4 w-[250px] border border-sloid bg-gray-200 rounded-lg hover:bg-purple-200"
      >
        <img
          className="rounded-lg"
          alt="res-img"
          src={`${IMAGE_URL}${cloudinaryImageId}`}
        ></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{(cuisines || []).join(", ")}</h4>
        <h4>{avgRating ?? "N/A"}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </>
  );
};

export const VegRestaurant = (RestaruntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Veg Restaurants
        </label>
        <RestaruntCard {...props} />
      </div>
    );
  };
};
export default RestaruntCard;
