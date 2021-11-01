import React from "react";
import Categories from "./Categories";
import Cities from "./Cities";
import "./home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="profile">
          <div className="profile-img">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="content">
            <p>Welcome Sandpian !</p>
            <p>location Kolkata, India</p>
          </div>
        </div>
        <div className="bell">
          <p>Bell</p>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="What's your destination?" />
      </div>
      <Categories />
      <Cities />
      <Navbar />
    </>
  );
};

export default Home;
