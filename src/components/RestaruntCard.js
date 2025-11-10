import React from "react";
import { IMAGE_URL } from "../utils/constant";
const RestaruntCard = (props) => {
  const info = props?.resData || {};
  const { name, avgRating, cuisines = [], sla = {}, cloudinaryImageId } = info;
  return (
    <div className="res-card">
      <img
        className="food1"
        alt="res-img"
        src={`${IMAGE_URL}${cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{(cuisines || []).join(", ")}</h4>
      <h4>{avgRating ?? "N/A"}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaruntCard;
