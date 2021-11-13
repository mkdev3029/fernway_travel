import "../components/styles/style.css";
import paypal from "../components/icon/paypal.svg";
import Start from "../components/icon/Start.svg";
import google from "../components/icon/google.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Payment = () => {
  var para = useParams();
  console.log("payment page", para);
  let total = 0;
  const imageUrl =
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

  const jsx = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`,
  };

  const [list, setList] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/reservation", {
        params: {
          route_to: para.locations, //mention location here
        },
      })
      .then(({ data }) => {
        setList([...data]);
      });

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
      <div>
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
            <p className="big-titles">Payment</p>
          </div>

          {list.map((el) => (
            <div className="payment-description-div">
              <div className="flex">
                <p className="payment-for">{el.types}</p>
                <p className="payment-price">{el.rates}</p>
                <div style={{ display: "none" }}>{(total += +el.rates)}</div>
              </div>
            </div>
          ))}

          <div className="flex">
            <p className="payment-total">Amount to be paid</p>
            <p className="total-payment-price"> {total} </p>
          </div>

          <Link to={`/fernway/paymentsuccessfull/${para.locations}`}>
            <div className="paypal-payment-btn">
              <div className="flex align-center">
                <img src={paypal} alt="" className="paypal-logo" />
                <p> Pay with Paypal</p>
                <img src={Start} alt="" className="start-logo" />
              </div>
            </div>
          </Link>

          <Link to={`/fernway/paymentsuccessfull/${para.locations}`}>
            <div className="google-payment-btn">
              <div className="flex align-center">
                <img src={google} alt="" className="paypal-logo" />
                <p className="google-text"> Pay with Google</p>
                <img src={Start} alt="" className="start-logo" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Payment;
