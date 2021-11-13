import pic from "./Payment.png";
import "./pay.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
const PaymentSuccessful = () => {
  const para = useParams();
  return (
    <>
      <div>
        <img className="pay_img" src={pic} alt="pay" />
        <h3 className="pay_h3">Payment Successful</h3>
        <p className="pay_para">Please wait while we process your payment</p>
      </div>
      <Link to={`/fernway/home/${para.locations}`}>
        <div className="cls">
          Got to homepage
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            top="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.43 5.93005L20.5 12.0001L14.43 18.0701"
              stroke="#1A8279"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="top"
            />
            <path
              d="M3.5 12H20.33"
              stroke="#1A8279"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};
export default PaymentSuccessful;
