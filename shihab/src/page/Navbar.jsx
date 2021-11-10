import React from "react";
import "../components/styles/style.css";
import home from '../components/icon/home.svg';
import mytrip from '../components/icon/mytrip.svg';
import bubble from '../components/icon/bubble.svg';
import profile from '../components/icon/profile.svg';

const Navbar = () => {
  return (
    <>
      <div className="nav-bar flex">
       <div className="nav-bar-icon"> <img src={home} alt=""  className="home-logo" /><p className="icon-title">Home</p></div>
       <div className="nav-bar-icon"> <img src={mytrip} alt=""  className="home-logo" /><p className="trip-icon-title">My Trips</p></div>
       <div className="nav-bar-icon"> <img src={bubble} alt=""  className="home-logo" /><p className="icon-title">Farney</p></div>
       <div className="nav-bar-icon"> <img src={profile} alt=""  className="home-logo" /><p className="icon-title">Profile</p></div>
      </div>
    </>
  );
};

export default Navbar;