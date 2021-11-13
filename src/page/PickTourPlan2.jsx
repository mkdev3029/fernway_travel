import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/styles/home.css";
import req from "../util/request";
import Icon from "../components/Icon_jsx/Icon";
import { Link } from "react-router-dom";

const PickTourPlan2 = () => {
  const [dataArr, setDataArr] = useState([]);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");

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

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSearch = ({ key }) => {
    if (key === "Enter") {
      setSearchText(text);
    }
  };

  const emptyContainer = () => {
    return (
      <div className="empty-container_mk package_empty_mk">
        <p>Search for destinations</p>
      </div>
    );
  };

  const showLocation = () => {
    return (
      <div className="package_mk">
        <div className="heading_mk">
          <p>Single City Package</p>
          <p>See more &#62;</p>
        </div>
        {dataArr.map(
          (dest) =>
            dest.location.includes(searchText) &&
            dest.packages.map((pack, index) => (
              <div key={index} className="package_card_mk">
                <div className="package-card-details_mk">
                  <div
                    className="package-card-img_mk"
                    style={{
                      backgroundImage: `url(${pack.image_url})`,
                    }}
                  >
                    <div className="package_tag_mk">
                      <p>{pack.days} days</p>
                    </div>
                  </div>
                  <div className="city-content_mk">
                    <div className="city-details_mk">
                      <div className="package_dest_mk">
                        <p>{pack.name}</p>
                        <p>{pack.route}</p>
                      </div>
                      <div className="rating-icon_mk">
                        <p>{pack.rating}</p>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2975 2.63248L11.6175 5.27248C11.7975 5.63998 12.2775 5.99248 12.6825 6.05998L15.075 6.45748C16.605 6.71248 16.965 7.82248 15.8625 8.91748L14.0025 10.7775C13.6875 11.0925 13.515 11.7 13.6125 12.135L14.145 14.4375C14.565 16.26 13.5975 16.965 11.985 16.0125L9.74249 14.685C9.33749 14.445 8.66999 14.445 8.25749 14.685L6.01499 16.0125C4.40999 16.965 3.43499 16.2525 3.85499 14.4375L4.38749 12.135C4.48499 11.7 4.31249 11.0925 3.99749 10.7775L2.13749 8.91748C1.04249 7.82248 1.39499 6.71248 2.92499 6.45748L5.31749 6.05998C5.71499 5.99248 6.19499 5.63998 6.37499 5.27248L7.69499 2.63248C8.41499 1.19998 9.58499 1.19998 10.2975 2.63248Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="package-temp_mk">
                      <div className="package_amenities_mk">
                        {pack.transport.map((type, i) => (
                          <div key={i} className="amenities_mk">
                            <Icon type={type} />
                            <p>{type}</p>
                          </div>
                        ))}
                      </div>
                      <div className="price">₹{pack.price}</div>
                    </div>
                  </div>
                  <div className="">
                    <Link to={`/fernway/destination/${dest.location}`}>
                      <button>View Details</button>
                    </Link>
                    <Link to="">
                      <button>Book</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    );
  };

  return (
    <>
      <div className="banner_mk"></div>
      <div className="flex_mk">
        <div className="move-top_mk">
          <p className="tour-title_mk">Pick a tour plan</p>
        </div>
      </div>
      <div className="plan-trip_mk">
        <div className="current-trip_mk">
          {/* <h1>Current Trip</h1> */}
          <div className="search-pick-tour-plan_mk">
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
            <input
              value={text}
              onKeyUp={handleSearch}
              onChange={handleChange}
              type="text"
              placeholder="What's your destination?"
            />
          </div>
        </div>
      </div>
      {searchText === "" ? emptyContainer() : showLocation()}
      <Navbar />
    </>
  );
};

export default PickTourPlan2;
