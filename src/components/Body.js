import React, { useState, useEffect, useContext } from "react";
import RestaruntCard, { VegRestaurant } from "./RestaruntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
// import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const VegRest = VegRestaurant(RestaruntCard);

  const onlineStattus = useOnlineStatus();
  const data = useContext(UserContext);
  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    const arrayData =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
  const handleInputChange = (e) => {
    data.setUserName(e.target.value);
  };
  const clearFilter = () => {
    if (searchText.length > 0) {
      setSearchText("");
    }
    setListOfRestraunt(allRestaurant);
    setIsFiltered(false);
  };
  if (onlineStattus === false) {
    return <h1>Looks like you are offline. Please check your internet</h1>;
  }
  return listOfRestraunt?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid  border-black p-2 "
            onChange={inputChange}
            value={searchText}
          ></input>
          <button
            onClick={searchRestraunts}
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          >
            Search
          </button>
          <span className="px-4 py-2 bg-blue-300">
            <button
              className="px-4 py-2 bg-grey-100"
              onClick={handleButtonClcik}
            >
              Top Rated Restaurant
            </button>
          </span>
          {isFiltered && (
            <span>
              <span className="filterd-results">
                Filtered Restruants : {listOfRestraunt.length}
              </span>
              <button
                className="m-4 p-4 border border-black"
                onClick={clearFilter}
              >
                Clear
              </button>
            </span>
          )}
          <span className="m-4 p-4">
            <label className="m-2 p2">User</label>
            <input
              type="text"
              className="border border-solid  border-black p-2 "
              onChange={handleInputChange}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestraunt?.map((restraunt, index) => (
          <Link
            key={restraunt?.id ?? restraunt?.name ?? `rest-${index}`}
            to={"/restaurants/" + restraunt?.id}
          >
            {restraunt?.veg ? (
              <VegRest resData={restraunt} />
            ) : (
              <RestaruntCard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
