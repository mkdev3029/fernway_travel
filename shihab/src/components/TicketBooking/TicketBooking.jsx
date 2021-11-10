import train from '../icon/Train.svg';

const TicketBooking = () => {
    return (
        <>
        <div className='ticket-card'>
           <img className='ticket-card-img'  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="flex">
                <div className="card-from-location">
                    <p className="location-name">Howrah</p>
                    <p className="location-time">6:30 am</p>
                </div>
                <div className="card-vehicle-logo">
                <img src={train} alt="" className="location-vehicle-logos" />
                <p className="location-vehicle-details" >Train</p>
                </div>
                <div className="card-from-location">
                    <p className="location-name">Bilaspur</p>
                    <p className="location-time">2:30 pm</p>
                </div>
            </div>
            <button className="ticket-price">₹ 141</button>
        </div>


        <div className='ticket-card'>
           <img className='ticket-card-img'  src="https://media.istockphoto.com/photos/trafficlights-in-the-city-at-night-time-picture-id1045929296?b=1&k=20&m=1045929296&s=170667a&w=0&h=Aa8iRDi903c140-EZH58PC_l9opNrGbP73a23ily1A4=" alt="" />
            <div className="flex">
                <div className="card-from-location">
                    <p className="location-name">Howrah</p>
                    <p className="location-time">6:30 am</p>
                </div>
                <div className="card-vehicle-logo">
                <img src={train} alt="" className="location-vehicle-logos" />
                <p className="location-vehicle-details" >Train</p>
                </div>
                <div className="card-from-location">
                    <p className="location-name">Bilaspur</p>
                    <p className="location-time">2:30 pm</p>
                </div>
            </div>
            <button className="ticket-price">₹ 141</button>
        </div>


        <div className='ticket-card'>
           <img className='ticket-card-img' src="https://media.istockphoto.com/photos/generic-modern-suv-car-in-concrete-garage-picture-id1307086567?b=1&k=20&m=1307086567&s=170667a&w=0&h=NjcM6LIOkmfhyqH-zrbFU7pHCPxIABvNhWaOElm_P-E=" alt="" />
            <div className="flex">
                <div className="card-from-location">
                    <p className="location-name">Howrah</p>
                    <p className="location-time">6:30 am</p>
                </div>
                <div className="card-vehicle-logo">
                <img src={train} alt="" className="location-vehicle-logos" />
                <p className="location-vehicle-details" >Train</p>
                </div>
                <div className="card-from-location">
                    <p className="location-name">Bilaspur</p>
                    <p className="location-time">2:30 pm</p>
                </div>
            </div>
            <button className="ticket-price">₹ 141</button>
        </div>

    </>
    )
}

export default TicketBooking