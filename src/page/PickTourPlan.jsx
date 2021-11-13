import React, { useState, useEffect } from "react";
import "../components/styles/home.css";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const PickTourPlan = () => {
  const para = useParams();
  console.log("Picktourplan", para);

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
  const showCurrentTrip = () => {
    return (
      <>
        <div className="current-trip_mk">
          <h1>Current Trip</h1>
          <div
            className="trip-container_mk"
            style={{
              backgroundImage: `url("https://s3-alpha-sig.figma.com/img/7f2f/25be/8cfda7bebbdf510f00111c2d7f3999f9?Expires=1637539200&Signature=hSqLMtG-qghaRQ4YTqMfi6LS-ao8f4IE9wwnLvDIDXgI7eaVXpwjX8sA7ANcI4AyT-Q49EEAQ29IDDeQMhF2ewbC~75ZqcyUvYQSXJOw9POtE9tIfo04NFkr9qFp7gJLWDZESCcimwEe9QI~uWAqOlUBxfYPxGNm-Yg-FYWF~~korhASGXB6ZVy~b9emRZ8bQg-XEs4J922oCDoaX1c-j77GQg5UUoJiLIUrK5RphiWeSFv0eUfF359jCcf-0XkcZ31zevcBvKp73oD9IrDC7FwplEylsvQcmErqTXEl0EJ~6hXBV8U~jhNe3gHbpQLyvrACnd1yPiazJb4kqePQjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")`,
            }}
          ></div>
          {locations.map((el) => (
            <>
              <p className="trip_title">{el.title}</p>
              <p className="trip_date">18th Nov - 20th Nov</p>
            </>
          ))}
        </div>
        <div className="current-trip_mk">
          <h1>Past Trip</h1>
          <div className="empty-container_mk">
            <p>There's no past trip</p>
          </div>
        </div>
      </>
    );
  };

  const showEmpty = () => {
    return (
      <>
        <div className="current-trip_mk">
          <h1>Current Trip</h1>
          <div className="empty-container_mk">
            <p>There's no ongoing trip right now</p>
          </div>
          <div className="tour-plan-btn_mk">
            <Link to="/fernway/picktourplan">
              <button className="pick-tour-btn_mk">Pick a tour plan</button>
            </Link>
            <button className="create-plan-btn_mk">Create your own plan</button>
          </div>
        </div>
        <div className="current-trip_mk">
          <h1>Past Trip</h1>
          <div className="empty-container_mk">
            <p>There's no past trip</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="banner_mk"></div>
      <div className="flex_mk">
        <div className="move-top_mk">
          <p className="tour-title_mk">My Trips</p>
        </div>
      </div>
      <div className="plan-trip_mk">
        {para.locations === "true" ? showEmpty() : showCurrentTrip()}
      </div>
      <Navbar />
    </>
  );
};

export default PickTourPlan;
