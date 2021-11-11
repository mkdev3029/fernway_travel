import "../components/styles/style.css";
import train from '../components/icon/Train.svg';
import car from '../components/icon/Car.svg';
import hostel from '../components/icon/Hostel.svg';
import AttractionCard from '../components/IncludedAttractionCards/AttractionCard'
import ActivitiesCard from '../components/IncludedAttractionCards/ActivitiesCard';
import HotelCards from '../components/IncludedAttractionCards/HotelCards';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TourPlan = () => {
    const imageUrl =
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

    const jsx = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`
    };
    //includedActivities
    const [list, setList] = useState([]);
    const [activitiesList, setActivitiesList] = useState([]);
    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/includedAttraction").then(({ data }) => {
            setList([...data])
        })

        axios.get("http://localhost:3004/includedActivities").then(({ data }) => {
            setActivitiesList([...data])
        })

        axios.get("http://localhost:3004/includedLivePlace").then(({ data }) => {
            setHotelList([...data])
        })
    }, [])


    return (
        <>
            <div className="wrapper" style={jsx}></div>
            <div className="flex">
                <div className="move-top">
                    <p className="tour-title">Manali Trip</p>
                    <p className="tour-place-title">Kolkata - Manali </p>
                </div>
                <div className="move-top-btn">
                    <button className="tour-days-btn">4 Days</button>
                </div>
            </div>
            <div className="container">
                <p className="abouts">About</p>
                <p className="tour-description">
                    Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.
                </p>
                <p className="tour-description-2">
                    Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.
                </p>
                <p className="big-titles">Included Facilities</p>
                <div className="flex">
                    <img src={train} alt="" className="train-logo" />
                    <img src={car} alt="" className="train-logo" />
                    <img src={hostel} alt="" className="train-logo" />
                </div>
                <button className="trip-btn">Continue -> </button>
                <p className="big-titles">Included Attractions ({list.length})</p>
                <AttractionCard list={list} />
                <p className="big-titles">Included Activities ({activitiesList.length})</p>
                <ActivitiesCard activitiesList={activitiesList} />
                <p className="big-titles">Included Hotel/Hostel/Dorms ({hotelList.length})</p>
                <HotelCards hotelList={hotelList} />

            </div>
        </>
    )
}

export default TourPlan