import React from "react";
import "./home.css";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="heading">
          <p>Categories</p>
          <p>See more &#62;</p>
        </div>
        <div className="card">
          <div className="card-details">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <p>Mountain</p>
          </div>
          <div className="card-details">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
                alt=""
              />
            </div>
            <p>Beach</p>
          </div>
          <div className="card-details">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1587102100712-6c7ae6b6da53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <p>Forest</p>
          </div>
          <div className="card-details">
            <div className="card-img">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1244&q=80"
                alt=""
              />
            </div>
            <p>Cities</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
