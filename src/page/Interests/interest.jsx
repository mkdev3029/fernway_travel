import "./interest.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import req from "../../util/request";

const Interest = () => {
  const [data, setData] = useState([]);
  const [count, setIsCount] = useState(1);

  const getData = async () => {
    req.get("/data").then((response) => {
      const out = response.data;
      setData(out);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const select1 = (e) => {
    var target = `${e.target.id}`;

    var x = document.querySelector(`.cls${target}`);
    x.style.display = "block";
    setIsCount(count + 1);
    console.log(count);
    if (count === 1) {
      var y = document.querySelector(".sele");
      y.innerHTML = "Pick any 3 to continue";
      y.style.color = "red";
    } else if (count === 2) {
      var z = document.querySelector(".sele");
      z.innerHTML = "Pick any 2 to continue";
      z.style.color = "red";
    } else if (count === 3) {
      var k = document.querySelector(".sele");
      k.innerHTML = "Pick any 1 to continue";
      k.style.color = "red";
    } else if (count === 4) {
      var m = document.querySelector(".sele");
      m.innerHTML = "4 Selected";
      m.style.color = "black";
      var l = document.querySelector(".btn");
      l.style.background = "#1A8279";
    }
  };

  return (
    <>
      <svg
        width="12"
        height="24"
        viewBox="0 0 12 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="prev"
      >
        <path
          d="M11 22.5599L2.30668 13.8666C1.28002 12.8399 1.28002 11.1599 2.30668 10.1333L11 1.43994"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="sk">skip</p>
      <br />
      <h1 className="h">Select your Interest</h1>
      <p className="sele">Pick any 4 to continue</p>
      <br />
      <div className="cart-img">
        {data.map((item) => (
          <div key={item.id}>
            <img
              className="cat"
              src={item.img}
              alt="ima"
              onClick={select1}
              id={item.id}
              role="button"
            />
            <div className={item.textcls}>{item.text}</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={item.selectcls}
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.75 12L10.58 14.83L16.25 9.17004"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
        <Link to="/fernway/location_access">
          <button className="btn">
            <div>
              <div className="top">Continue </div>
              <div className="top1">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.43 5.93005L20.5 12.0001L14.43 18.0701"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="top"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};
export { Interest };
