import React from "react";
import "./home.css";
import data from "../db.json";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="heading">
          <p>Categories</p>
          <p>See more &#62;</p>
        </div>
        <div className="card">
          {data.categories.map(({ image_url, text }, i) => (
            <div key={i} className="card-details">
              <div className="card-img">
                <img src={image_url} alt="" />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
