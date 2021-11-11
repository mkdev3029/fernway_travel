import train from '../icon/Train.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TicketBooking = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/reservation").then(({ data }) => {
            setList([...data])
        })
    }, [])

    return (
        <>
            {
                list.map((el) =>
                    <div className='ticket-card'>
                        <img className='ticket-card-img' src={el.image} alt="" />
                        <div className="flex">
                            <div className="card-from-location">
                                <p className="location-details">{el.pickupLocation}</p>
                                <p className="location-time">{el.pickupTime}</p>
                            </div>
                            <div className="card-vehicle-logo">
                                <img src={train} alt="" className="location-vehicle-logos" />
                                <p className="location-vehicle-details" >Train</p>
                            </div>
                            <div className="card-from-location">
                                <p className="location-details">{el.dropLocation}</p>
                                <p className="location-time">{el.dropTime}</p>
                            </div>
                        </div>
                        <button className="ticket-price">₹ {el.rates} </button>
                    </div>
                )}
        </>
    )
}

export default TicketBooking