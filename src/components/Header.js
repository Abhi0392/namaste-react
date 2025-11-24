import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnReact, setButtonReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const handleLoginClick = () => {
    btnReact === "Login" ? setButtonReact("Logout") : setButtonReact("Login");
  };

  return (
    <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-200">
      <div>
        <img className="w-45" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={handleLoginClick}>
            {btnReact}
          </button>
          <li className="px-4  font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
