import "../components/styles/Style2.css";
import Day from "../components/icon/frame.svg";
import { Link } from "react-router-dom";

const SignUpPage1 = () => {
  return (
    <div className="wrapper-signup">
      <div className="welcome">
        <img src={Day} alt="" className="frame-logo" />
      </div>
      <div className="start-btn-div">
        <p className="main-titles">Join to Start Exploring</p>
        <Link to="/fernway/splashscreen/signuppage1/signuppage2">
          <button className="sign-up-btn">Sign-Up &#8594;</button>
        </Link>
        <button className="sign-in-btn">Sign In &#8594; </button>
        <p className="skip-btn">Skip</p>
      </div>
    </div>
  );
};

export default SignUpPage1;
