import React from "react";
import "./home.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-items">home</div>
        <div className="nav-items">
          <p>2</p>
          <p>My Trips</p>
        </div>
        <div className="nav-items">
          <p>3</p>
          <p>My Trips</p>
        </div>
        <div className="nav-items">
          <p>4</p>
          <p>Profile</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
