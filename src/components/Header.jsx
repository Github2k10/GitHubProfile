import React from "react";

import "./Header.scss";

const Header = ({ setUserName }) => {
  return (
    <>
      <div className="header">
        <div className="container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
