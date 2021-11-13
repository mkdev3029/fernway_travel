import location from "../card/images/location.svg";
import star from "../card/images/star.svg";
import "../styles/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const HotelBookingCard = () => {
  const para = useParams();
  console.log("hbc", para);

  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/reservation", {
        params: {
          route_to: para.locations,
          types: ["hostel Booking", "hotel Booking", "drom Booking"], //mention location here
        },
      })
      .then(({ data }) => {
        setList([...data]);
      });
  }, []);

  return (
    <>
      {list.map((el) => (
        <div className="ticket-card">
          <img className="ticket-card-img" src={el.image} alt="" />
          <div className="flex">
            <p className="hotel-card-name">{el.title}</p>
            <p className="hotel-card-Rate">{el.star}</p>
            <img src={star} alt="" className="hotel-card-star-logo" />
          </div>
          <div className="flex">
            <img src={location} alt="" className="card-location-logo" />
            <p className="card-location-titles">{el.location}</p>
          </div>

          <div className="flex">
            <p className="hotel-details">{el.type}</p>
            <button className="hotel-price">₹ {el.rates}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelBookingCard;
