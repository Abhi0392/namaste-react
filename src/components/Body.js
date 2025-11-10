import React, { useState, useEffect } from "react";
import RestaruntCard from "./RestaruntCard";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9745385&lng=77.6805538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const arrayData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    const filteredData =
      arrayData &&
      arrayData.map((item) => {
        return item?.info;
      });
    setListOfRestraunt(filteredData);
    setAllRestaurant(filteredData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const searchRestraunts = () => {
    const searchedRestraunts = listOfRestraunt.filter((item) =>
      item?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestraunt(searchedRestraunts);
    setIsFiltered(true);
  };

  const inputChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleButtonClcik = () => {
    const filteredRestruantList = listOfRestraunt.filter((item) => {
      return item?.avgRating > 4;
    });
    setListOfRestraunt(filteredRestruantList);
    setIsFiltered(true);
  };
  const clearFilter = () => {
    if (searchText.length > 0) {
      setSearchText("");
    }
    setListOfRestraunt(allRestaurant);
    setIsFiltered(false);
  };
  return listOfRestraunt?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <div className="search">
          <input
            type="text"
            className="searchBox"
            onChange={inputChange}
            value={searchText}
          ></input>
          <button onClick={searchRestraunts} className="search-btn">
            Search
          </button>

          <button className="filter-btn" onClick={handleButtonClcik}>
            Top Rated Restaurant
          </button>
          {isFiltered && (
            <span>
              <span className="filterd-results">
                Filtered Restruants : {listOfRestraunt.length}
              </span>
              <button className="clear-filter-btn" onClick={clearFilter}>
                Clear
              </button>
            </span>
          )}
        </div>
      </div>
      <div className="res-container">
        {listOfRestraunt?.map((restraunt, index) => (
          <RestaruntCard
            key={restraunt?.id ?? restraunt?.info?.name ?? `rest-${index}`}
            resData={restraunt}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
