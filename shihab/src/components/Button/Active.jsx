import React, { useEffect, useState } from "react";
import ReviewAttraction from "../review/ReviewAttraction";
import ReviewActivities from '../review/ReviewActivities'
import FilterComponent from '../FilterComponent/FilterComponent'
import FoodCard from '../FoodCard/FoodCard'
import "../styles/style.css";
import bookmark from './icons/bookmark.svg';
import location from './icons/location.svg';
import wind from './icons/wind.svg';
import snowflake from './icons/snowflake.svg';
import bell from './icons/bell.svg';
import vector from './icons/Vector.svg';
import seeMore from './icons/seeMore.svg';
import seeMores from './icons/seeMores.svg';
import Card from "../card/Card";
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard'
import axios from "axios";
// import { Link,Router,Route } from 'react-router-dom';

const Active = () => {
    const [activate, setActivate] = useState("");
    const [Notactivate, setNotactivate] = useState("active");
    const [show, Setshow] = useState(true)
    const [attractions, setAttractions] = useState("btn");
    const [notActivities, setNotActivities] = useState("active2");
    const [reviewShow, SetreviewShow] = useState(true)
    const [filterActive, setFilterActive] = useState("filter-btn");
    const [filterActive1, setFilterActive1] = useState("filter-btn");
    const [filterActive2, setFilterActive2] = useState("filter-btn");
    const [filterActive3, setFilterActive3] = useState("filter-btn");
    const [list, setList] = useState([]);
    const [locations, setLocations] = useState([]);

    const toggleActive = () => {
        Setshow(true)
        setNotactivate(Notactivate === "" ? "active" : "active");
        setActivate(activate === "active" ? "" : "");
    };

    const toggleActives = () => {
        Setshow(false)
        setActivate(activate === "" ? "active" : "active");
        setNotactivate(Notactivate === "active" ? "" : "");
    };


    const attractionActive = () => {
        SetreviewShow(true)
        setNotActivities(notActivities === "btn" ? "active2" : "active2");
        setAttractions(attractions === "active2" ? "btn" : "btn");
    };

    const activitiesActives = () => {
        SetreviewShow(false)
        setAttractions(attractions === "btn" ? "active2" : "active2");
        setNotActivities(notActivities === "active2" ? "btn" : "btn");
    };


    function getAllData() {
        const { data } = axios.get("http://localhost:3004/places-to-live").then(({ data }) => {
            setList([...data])
        })
    }

    function getSpecificData(value) {
        const { data } = axios.get("http://localhost:3004/places-to-live", {
            params: {
                type: value      //mention location here
            }
        }).then(({ data }) => {
            setList([...data])
        })
    }
    const filterShow = () => {
        getAllData()
        setFilterActive(filterActive === "filter-btn" ? "filterActives" : "filterActives");
        setFilterActive1(filterActive1 === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive2(filterActive2 === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive3(filterActive3 === "filterActives" ? "filter-btn" : "filter-btn");
    }

    useEffect((value) => {
        getAllData();
        getSpecificData(value);
    }, []);

    const filterShow1 = (value) => {
        getSpecificData(value);
        setFilterActive1(filterActive1 === "filter-btn" ? "filterActives" : "filterActives");
        setFilterActive(filterActive === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive2(filterActive2 === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive3(filterActive3 === "filterActives" ? "filter-btn" : "filter-btn");
    }
    const filterShow2 = (value) => {
        getSpecificData(value);
        setFilterActive2(filterActive2 === "filter-btn" ? "filterActives" : "filterActives");
        setFilterActive1(filterActive1 === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive(filterActive === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive3(filterActive3 === "filterActives" ? "filter-btn" : "filter-btn");
    }
    const filterShow3 = (value) => {
        getSpecificData(value);
        setFilterActive3(filterActive3 === "filter-btn" ? "filterActives" : "filter-btn");
        setFilterActive2(filterActive2 === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive1(filterActive1 === "filterActives" ? "filter-btn" : "filter-btn");
        setFilterActive(filterActive === "filterActives" ? "filter-btn" : "filter-btn");
    }



    useEffect(() => {
        axios.get("http://localhost:3004/location", {
            params: {
                location: "Kerla, India",     //mention location here
            }
        }).then(({ data }) => {
            setLocations([...data])
        })
    }, [])


    return (
        <div className='header'>
            <div className="block">
                <button onClick={toggleActive} className={activate}>About</button>
                <button onClick={toggleActives} className={Notactivate}>Accommodation</button>
                {
                    show ?
                        <div className="abouts-tab">
                            <div className="flex">
                                <h2 className="titles">Places to live</h2>
                                <p className="place-See-more">See more  <img src={seeMores} alt="" className="place-See-more-icon" /></p>
                            </div>
                            <div className="flex fielter-div">
                                <button className={filterActive} onClick={() => filterShow()} >All</button>
                                <button className={filterActive1} onClick={() => filterShow1("hotel")}  >Hotels</button>
                                <button className={filterActive2} onClick={() => filterShow2("hostel")} >Hostels</button>
                                <button className={filterActive3} onClick={() => filterShow3("dorms")} >Dorms</button>
                            </div>
                            <FilterComponent list={list} />
                            <button className="trip-btn">Plan a Trip -> </button>
                            <FoodCard />
                        </div>

                        :
                        locations.map((el) =>
                            <div className="accommodation-tab">
                                <div key={el.id}>
                                    <div className="flex">
                                        <h2 className="titles">{el.title}</h2>
                                        <img src={bookmark} alt="" className="bookmark-logo" />
                                    </div>
                                    <div className="location-div">
                                        <img src={location} alt="" className="location-logo" />
                                        <p className="location-name">{el.location}</p>
                                    </div>
                                    <div className="flex">
                                        <img src={wind} alt="" className="wind-logo" />
                                        <img src={snowflake} alt="" className="snowflake-logo" />
                                        <span className="celcius-logo">{el.tempreture}&#8451;</span>
                                        <img src={bell} alt="" className="bell-logo" />
                                        <p className="safe-logo">{el.safe}% safe</p>
                                    </div>

                                    <div className="flex">
                                        <img src={vector} alt="" className="vector-logo" />
                                        <p className="Vaccinated-text">{el.vaccinated}% of People Vaccinated</p>
                                    </div>
                                    <p className="title-description">{el.fullDetails}</p>


                                </div>
                                <div className="center">
                                {/* <Router>  */}
                                {/* <Link to={`/src/page/TourPlan.jsx/${el.id}`}> */}
                                    <p className="See-more">See more <img src={seeMore} alt="" className="See-more" /></p>
                                {/* </Link>
                                </Router> */}
                                </div>
                                <div className="line"></div>
                                <p className="attraction-heading">Attractions to visit</p>
                                <Card />
                                <div className="flex">
                                    <p className="attraction-heading">Activities to try</p>
                                    <p className="Activities-See-mores">See more  <img src={seeMores} alt="" className="Act-See-more" /></p>
                                </div>
                                <ActivitiesCard />
                                <div className="line"></div>
                                <p className="attraction-heading">Reviews</p>
                                <div className="flex btn-div">
                                    <button onClick={attractionActive} className={attractions}>Attractions</button>
                                    <button onClick={activitiesActives} className={notActivities} >Activities</button>
                                </div>
                                {reviewShow ?
                                    <div className="attractionShow">
                                        <ReviewAttraction />
                                    </div>
                                    :
                                    <div className="activitiesShow">
                                        <ReviewActivities />
                                    </div>
                                }
                            </div>
                        )}
                <br />
            </div>
        </div >
    )
}

export default Active