import "./interest.css"
import { useEffect, useState } from "react";

import { data1 } from "./fetch";

const Interest = (() => {
  const [data, setData] = useState([]);
 const [isActive, setIsActive] = useState({})

  const getData = async () => {
    data1.get('/')
      .then(response => {
       // console.log(response);
        const out = response.data;
        setData(out);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  // const select1 = (value) => {
  //    var x = document.querySelector('.cls1');
  //      x.style.display="block";
  // }

  for(let i = 0; i < data.length; i++) {
    isActive[`select${i+1}`] = false
    }


  // console.log('isActive obj',isActive)

    const select1 = (e) => {
    var target = `${e.target.id}`;
    console.log('target',target)
    Object.keys(isActive).forEach((key) => {
      isActive[key] = false;
    });
    isActive[`select${target}`] = true;
    setIsActive({ ...isActive });
  }

  return (
    <>
      <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="prev">
        <path d="M11 22.5599L2.30668 13.8666C1.28002 12.8399 1.28002 11.1599 2.30668 10.1333L11 1.43994" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="sk">skip</p>
      <br />
      <h1 className="h">Select your Interest</h1>
      <p className="sele">Pick any 4 to continue</p>
      <br />
      <div className="cart-img">
        {data.map((item) => (
          <div key={item.id}>

            <img className="cat" src={item.img} alt="ima" onClick={select1} id={item.id} role="button"  />
            <div className={item.textcls}>{item.text}</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className={item.selectcls}>
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>
    </>
  )
})
export { Interest };




