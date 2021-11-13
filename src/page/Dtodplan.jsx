import React from "react";
import "../components/styles/home.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dtodplan = () => {
  const para = useParams();
  console.log("Dtodplan", para);

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
      <div className="banner_mk"></div>
      <div className="flex_mk">
        {locations.map((el) => (
          <div className="move-top_mk">
            <p className="tour-title_mk">{el.title}</p>
            <p className="tour-title_dest_mk ">{el.locations}</p>
          </div>
        ))}
        ;
      </div>
      <div className="plan-trip_mk">
        <div className="current-trip_mk dtod_trip_mk">
          <h1>Day To Day Plan</h1>
          <div className="trip_days_mk">
            <div className="trip_days_item_mk">
              <p className="color_white">Day 1</p>
            </div>
            <div className="trip_days_item_mk">
              <p className="color_green">Day 2</p>
            </div>
            <div className="trip_days_item_mk">
              <p className="color_green">Day 3</p>
            </div>
            <div className="trip_days_item_mk">
              <p className="color_green">Day 4</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trip_card_mk">
        <div className="trip_card_item_mk">
          <img
            src="https://images.unsplash.com/photo-1442570468985-f63ed5de9086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1520&q=80"
            alt=""
          />
          <div className="trip_card_route_mk">
            <div className="trip_card_route_mk_left">
              <p>Howrah</p>
              <p>6:30 am</p>
            </div>
            <div className="trip_card_route_mk_left">
              <p>Bilaspur</p>
              <p>2:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dtodplan;
