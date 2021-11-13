import "../components/styles/Style2.css";
import Day from "../components/icon/Frame2.svg";
import user from "../components/icon/person.svg";
import emails from "../components/icon/email.svg";
import call from "../components/icon/calls.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage2 = () => {
  const [userReg, setUserReg] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserReg({ ...userReg, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userReg, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);

    console.log(userReg);

    fetch("http://localhost:3004/register", {
      method: "POST",
      body: JSON.stringify(newRecord),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRecords([...records, newRecord]);

    setUserReg({
      name: "",
      email: "",
      phone: "",
    });
    window.location.href = "/fernway/splashscreen/signuppage1/signuppage2/otp";
    // alert("sucsess");
  };
  return (
    <div className="wrapper">
      <div className="frame-2">
        <img src={Day} alt="" className="frame-logo" />
      </div>
      <p className="sign-title">Sign Up</p>
      <p className="continue-title">Create an account to continue</p>
      <div className="input-btn-div">
        <div className="google-div">
          <img
            src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
            alt="Icon 1"
            className="gogle-icon"
          />
        </div>
        <div className="facebook-div">
          <img
            src="https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png"
            alt="Icon 1"
            className="facebook-icon"
          />
        </div>
        <div className="line-1"></div>
        <p className="or-title">or</p>
        <div className="line-2"></div>

        <div className="flex">
          <div className="user-icon-div">
            <img src={user} alt="" className="user-logo" />
          </div>
          <input
            type="text"
            className="name-box"
            name="name"
            placeholder="Enter Name"
            value={userReg.name}
            onChange={handleInput}
            required="required"
          />
        </div>

        <div className="flex">
          <div className="email-icon-div">
            <img src={emails} alt="" className="email-logo" />
          </div>
          <input
            type="email"
            className="email-box"
            name="email"
            placeholder="Enter Email"
            value={userReg.email}
            onChange={handleInput}
            required="required"
          />
        </div>

        <div className="flex">
          <div className="call-icon-div">
            <img src={call} alt="" className="call-logo" />
          </div>
          <input
            type="Number"
            className="call-box"
            name="phone"
            placeholder="Enter Mobile Number"
            value={userReg.phone}
            onChange={handleInput}
            required="required"
          />
          <p className="desc">By clicking on Sign Up, you agree to Fernway’s</p>{" "}
          <p className="desc2">Terms of use</p>
          <Link to="/fernway/splashscreen/signuppage1/signuppage2/otp">
            <button className="sign-up-btn2" onClick={handleSubmit}>
              Sign-Up &#8594;
            </button>
          </Link>
          <p className="suggestion-sign">Already a member? </p>
          <p className="signin">Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;
