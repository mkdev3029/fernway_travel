import location from '../card/images/location.svg';
import star from '../card/images/star.svg';
import "../styles/style.css";

const HotelBookingCard = () => {
    return (
        <>
                <div className='ticket-card'>
                    <img className='ticket-card-img' src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=" alt="" />
                    <div className="flex">
                        <p className="hotel-card-name">Sun Park Resort</p>
                        <p className="hotel-card-Rate">4</p>
                        <img src={star} alt="" className="hotel-card-star-logo" />
                    </div>
                    <div className="flex">
                        <img src={location} alt="" className="card-location-logo" />
                        <p className="card-location-titles">Burwa, Manali</p>
                    </div>

                    <div className="flex">
                        <p className="hotel-details">Hotels</p>
                        <button className="hotel-price">₹ 141</button>
                    </div>
                </div>
        </>
    )
}

export default HotelBookingCard
