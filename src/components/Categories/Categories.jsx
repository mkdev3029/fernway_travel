import React, { useState, useEffect } from "react";
import "../styles/home.css";
import req from "../../util/request";

const Categories = () => {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await req.get("/categories");
      setDataArr(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      <div className="categories_mk">
        <div className="heading_mk">
          <p>Categories</p>
          <p>See more &#62;</p>
        </div>
        <div className="card_mk">
          {dataArr.map(({ image_url, text }, i) => (
            <div key={i} className="card-details_mk">
              <div className="card-img_mk">
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
