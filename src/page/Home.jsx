import React, { useState, useEffect } from "react";
import Categories from "../components/Categories/Categories";
import Cities from "../components/Cities/Cities";
import "../components/styles/home.css";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router";

const Home = () => {
  const para = useParams();
  console.log("home", para);
  const [data, setData] = useState("");
  const [isLocation, setIsLocation] = useState(false);

  useEffect(() => {
    if (para.locations !== "true") {
      setData(para.locations);
    }
  }, []);

  return (
    <>
      <div className="container_mk">
        <div className="header_mk">
          <div className="profile_mk">
            <div className="profile-img_mk">
              {isLocation ? (
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16C19.6819 16 22.6666 13.0152 22.6666 9.33329C22.6666 5.65139 19.6819 2.66663 16 2.66663C12.3181 2.66663 9.33331 5.65139 9.33331 9.33329C9.33331 13.0152 12.3181 16 16 16Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.4533 29.3333C27.4533 24.1733 22.32 20 16 20C9.68002 20 4.54669 24.1733 4.54669 29.3333"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className="content_mk">
              <p>Welcome John!</p>
              <p>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z"
                    stroke="#1a8279"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.62 8.49C5.59 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
                    stroke="#1a8279"
                    strokeWidth="1.5"
                  />
                </svg>
                {isLocation ? "Kolkata, India" : "Add current location"}
              </p>
            </div>
          </div>
          <div className="bell_mk">
            {data.length !== 0 && <div className="circle"></div>}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.02 2.91003C8.71 2.91003 6.02 5.60003 6.02 8.91003V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z"
                stroke="#1a8279"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
                stroke="#1a8279"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.9 21.1801C9.36 20.6401 9.02 19.8801 9.02 19.0601"
                stroke="#1a8279"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
        <div className="search_mk">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#1a8279"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#1a8279"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="text" placeholder="What's your destination?" />
        </div>
        <Categories />
        <Cities />
        {/* <Navbar /> */}
      </div>
      <Navbar />
    </>
  );
};

export default Home;
