import "../components/styles/style.css";
import React, { useState } from "react";
import TicketBooking from '../components/TicketBooking/TicketBooking'
import HotelBookingCard from '../components/HotelBookingCard/HotelBookingCard'

const TourPlan3 = () => {

    const imageUrl =
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

    const jsx = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`
    };

    const [attractions, setAttractions] = useState("hotel-btn");
    const [notActivities, setNotActivities] = useState("ticket-btn");
    const [reviewShow, SetreviewShow] = useState(true)
    
    const attractionActive = () => {
        SetreviewShow(true)
        setNotActivities(notActivities === "hotel-btn" ? "ticket-btn" : "hotel-btn");
        setAttractions(attractions === "ticket-btn" ? "hotel-btn" : "hotel-btn");
    };

    const activitiesActives = () => {
        SetreviewShow(false)
        setAttractions(attractions === "hotel-btn" ? "ticket-btn" : "hotel-btn");
        setNotActivities(notActivities === "ticket-btn" ? "hotel-btn" : "hotel-btn");
    };

    return (
        <>
            <div className="wrapper" style={jsx}></div>
            <div className="flex" style={{ marginBottom: "5%" }}>
                <div className="move-top">
                    <p className="tour-title">Manali Trip</p>
                    <p className="tour-place-title">Kolkata - Manali </p>
                </div>
                <div className="move-top-btn" >
                    <button className="tour-days-btn">4 Days</button>
                </div>
            </div>

            <div className="container" >
                <div className="flex">
                    <p className="big-titles">Reservations</p>
                </div>

                <div className="flex btn-div">
                    <button onClick={attractionActive} className={attractions}>Ticket Booking</button>
                    <button onClick={activitiesActives} className={notActivities} >Hostel Booking</button>
                </div>
                {reviewShow ?
                    <div className="attractionShow">
                          <TicketBooking />
                    </div>
                    :
                    <div className="activitiesShow">
                      <HotelBookingCard />
                    </div>

                }

           
            </div>
        </>
    )
}

export default TourPlan3