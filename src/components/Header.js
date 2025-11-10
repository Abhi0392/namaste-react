import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnReact, setButtonReact] = useState("Login");
  const handleLoginClick = () => {
    btnReact === "Login" ? setButtonReact("Logout") : setButtonReact("Login");
  };

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={handleLoginClick}>
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
