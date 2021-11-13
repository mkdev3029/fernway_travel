import "../components/styles/style.css";
import Day from "../components/icon/Day.svg";
//import React, { useState } from "react";
import DayToPlanCard from "../components/DayToPlanCard/DayToPlanCard";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const TourPlan2 = () => {
  const para = useParams();
  console.log("tourplan2", para);
  const imageUrl =
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

  const jsx = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`,
  };

  //const [daysBtn, setDaysBtn] = useState("daysBtn");

  // const filterShow = () => {
  //     setDaysBtn(daysBtn === "daysBtn" ? "daysBtnActives" : "daysBtn");
  // }

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/location", {
        params: {
          locations: para.locations, //mention location here
        },
      })
      .then(({ data }) => {
        setLocations([...data]);
      });
  }, []);

  return (
    <>
      <Link to={`/tourplan/day-to-day-plan/reservation/${para.locations}`}>
        <button className="trip-btn">Continue &#8594; </button>
      </Link>
      <div className="wrapper" style={jsx}></div>
      <div className="flex" style={{ marginBottom: "5%" }}>
        {locations.map((el) => (
          <div className="move-top">
            <p className="tour-title">{el.title}</p>
            <p className="tour-place-title">{el.locations} </p>
          </div>
        ))}
        <div className="move-top-btn">
          <button className="tour-days-btn">4 Days</button>
        </div>
      </div>

      <div className="container">
        <div className="flex">
          <p className="big-titles">Day to day Plan</p>
          <img src={Day} alt="" className="Day-logo" />
        </div>
        <div className="flex"></div>

        <DayToPlanCard />
        <DayToPlanCard />
        <DayToPlanCard />

        <div className="flex">
          <button className="view-detail-btn">View details</button>
          <button className="edit-detail-btn">Edit</button>
        </div>

        <DayToPlanCard />

        <div className="flex">
          <button className="view-detail-btn">View details</button>
          <button className="edit-detail-btn">Edit</button>
        </div>
      </div>
    </>
  );
};

export default TourPlan2;
