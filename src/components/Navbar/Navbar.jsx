import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useParams } from "react-router";

const Navbar = () => {
  const para = useParams();
  console.log("navbar", para);
  const [isActive, setIsActive] = useState({
    home: true,
    profile: false,
    farney: false,
    clipboard: false,
  });

  const handleToggle = (e) => {
    var target = `${e.target.value}`;
    Object.keys(isActive).forEach((key) => {
      isActive[key] = false;
    });
    isActive[target] = true;
    setIsActive({ ...isActive });
  };

  return (
    <>
      <div className="nav-bar_mk">
        <Link
          to={`/fernway/home/${
            para.locations !== "true" ? para.locations : "true"
          }`}
        >
          <button
            onClick={handleToggle}
            value="home"
            className={`nav-items_mk ${isActive["home"] ? "active_mk" : ""}`}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 24V20"
                stroke={`${isActive["home"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.4267 3.75996L4.18667 11.16C3.14667 11.9866 2.48001 13.7333 2.70667 15.04L4.48001 25.6533C4.80001 27.5466 6.61334 29.08 8.53334 29.08H23.4667C25.3733 29.08 27.2 27.5333 27.52 25.6533L29.2933 15.04C29.5067 13.7333 28.84 11.9866 27.8133 11.16L18.5733 3.7733C17.1467 2.62663 14.84 2.62663 13.4267 3.75996Z"
                stroke={`${isActive["home"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {!isActive["home"] && <p>Home</p>}
          </button>
        </Link>
        <Link
          to={`/fernway/mytrips/${
            para.locations !== "true" ? para.locations : "true"
          }`}
        >
          <button
            onClick={handleToggle}
            value="clipboard"
            className={`nav-items_mk ${
              isActive["clipboard"] ? "active_mk" : ""
            }`}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 16.2667H20"
                stroke={`${isActive["clipboard"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 21.6H16.5067"
                stroke={`${isActive["clipboard"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3334 7.99996H18.6667C21.3334 7.99996 21.3334 6.66663 21.3334 5.33329C21.3334 2.66663 20 2.66663 18.6667 2.66663H13.3334C12 2.66663 10.6667 2.66663 10.6667 5.33329C10.6667 7.99996 12 7.99996 13.3334 7.99996Z"
                stroke={`${isActive["clipboard"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.3333 5.35999C25.7733 5.59999 28 7.23999 28 13.3333V21.3333C28 26.6667 26.6667 29.3333 20 29.3333H12C5.33333 29.3333 4 26.6667 4 21.3333V13.3333C4 7.25332 6.22667 5.59999 10.6667 5.35999"
                stroke={`${isActive["clipboard"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {!isActive["clipboard"] && <p>My Trips</p>}
          </button>
        </Link>
        <Link
          to={`/fernway/farney/${
            para.locations !== "true" ? para.locations : "true"
          }`}
        >
          <button
            onClick={handleToggle}
            value="farney"
            className={`nav-items_mk ${isActive["farney"] ? "active" : ""}`}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7867 16.3466C24.5643 16.3466 27.6267 13.2843 27.6267 9.50663C27.6267 5.729 24.5643 2.66663 20.7867 2.66663C17.009 2.66663 13.9467 5.729 13.9467 9.50663C13.9467 13.2843 17.009 16.3466 20.7867 16.3466Z"
                stroke={`${isActive["farney"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M8.48 25.92C10.7481 25.92 12.5867 24.0814 12.5867 21.8133C12.5867 19.5453 10.7481 17.7067 8.48 17.7067C6.21195 17.7067 4.37335 19.5453 4.37335 21.8133C4.37335 24.0814 6.21195 25.92 8.48 25.92Z"
                stroke={`${isActive["farney"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M22.16 29.3334C24.0452 29.3334 25.5734 27.8052 25.5734 25.92C25.5734 24.0349 24.0452 22.5067 22.16 22.5067C20.2749 22.5067 18.7467 24.0349 18.7467 25.92C18.7467 27.8052 20.2749 29.3334 22.16 29.3334Z"
                stroke={`${isActive["farney"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
            {!isActive["farney"] && <p>Farney</p>}
          </button>
        </Link>
        <Link
          to={`/fernway/profile/${
            para.locations !== "true" ? para.locations : "true"
          }`}
        >
          <button
            onClick={handleToggle}
            value="profile"
            className={`nav-items_mk ${isActive["profile"] ? "active" : ""}`}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16C19.6819 16 22.6666 13.0152 22.6666 9.33329C22.6666 5.65139 19.6819 2.66663 16 2.66663C12.3181 2.66663 9.33331 5.65139 9.33331 9.33329C9.33331 13.0152 12.3181 16 16 16Z"
                stroke={`${isActive["profile"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.4533 29.3333C27.4533 24.1733 22.32 20 16 20C9.68002 20 4.54669 24.1733 4.54669 29.3333"
                stroke={`${isActive["profile"] ? "#ffff" : "#292D32"}`}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {!isActive["profile"] && <p>Profile</p>}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
