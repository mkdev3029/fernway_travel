import React, { useState, useEffect } from "react";
import Icon from "../Icon_jsx/Icon";
import req from "../../util/request";
import { Link } from "react-router-dom";

const Cities = () => {
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await req.get("/destination");
      setDataArr(data);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <>
      <div className="cities_mk">
        <div className="heading_mk">
          <p>Recommended Cities</p>
          <p>See more &#62;</p>
        </div>
        <div className="card_mk">
          {dataArr.map((dest, i) => (
            <Link to={`/fernway/destination/${dest.location}`}>
              <div key={i} className="city-card-details_mk">
                <div
                  className="city-card-img_mk"
                  style={{
                    backgroundImage: `url(${dest.image_url})`,
                  }}
                >
                  <div className="tag_mk">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#ffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#ffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <p>Safe for Visit</p>
                    </svg>
                    <p>Safe for Visit</p>
                  </div>
                </div>
                <div className="city-content_mk">
                  <div className="city-details_mk">
                    <div className="dest_mk">
                      <p>{dest.name}</p>
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
                        {dest.state}
                      </p>
                    </div>
                    <div className="save-icon_mk">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3333 14.2H12.6667"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 10.9467V17.6133"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.4267 2.66663H9.57336C6.73336 2.66663 4.4267 4.98663 4.4267 7.81329V26.6C4.4267 29 6.1467 30.0133 8.25336 28.8533L14.76 25.24C15.4534 24.8533 16.5734 24.8533 17.2534 25.24L23.76 28.8533C25.8667 30.0266 27.5867 29.0133 27.5867 26.6V7.81329C27.5734 4.98663 25.2667 2.66663 22.4267 2.66663Z"
                          stroke="#292D32"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="city-temp_mk">
                    <p>
                      {dest.weather.map((type, i) => (
                        <Icon key={i} type={type} />
                      ))}
                      {dest.temperature}°C
                    </p>
                    <p>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 21.25H21V15C21 10.03 16.97 6 12 6C7.03 6 3 10.03 3 15V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z"
                          fill="#292D32"
                        />
                        <path
                          d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z"
                          fill="#292D32"
                        />
                        <path
                          d="M5 5.75006C4.81 5.75006 4.62 5.68006 4.47 5.53006L3.47 4.53006C3.18 4.24006 3.18 3.76006 3.47 3.47006C3.76 3.18006 4.24 3.18006 4.53 3.47006L5.53 4.47006C5.82 4.76006 5.82 5.24006 5.53 5.53006C5.38 5.68006 5.19 5.75006 5 5.75006Z"
                          fill="#292D32"
                        />
                        <path
                          d="M19 5.75006C18.81 5.75006 18.62 5.68006 18.47 5.53006C18.18 5.24006 18.18 4.76006 18.47 4.47006L19.47 3.47006C19.76 3.18006 20.24 3.18006 20.53 3.47006C20.82 3.76006 20.82 4.24006 20.53 4.53006L19.53 5.53006C19.38 5.68006 19.19 5.75006 19 5.75006Z"
                          fill="#292D32"
                        />
                      </svg>
                      {dest.safety_rating}% safe
                    </p>
                  </div>
                  <div className="description_mk">
                    <p>{dest.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cities;
