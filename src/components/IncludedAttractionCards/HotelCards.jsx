
import location from '../card/images/location.svg';
import star from '../card/images/star.svg';
import "../styles/style.css";

const HotelCards = ({hotelList}) => {
    return (
        <>
            <div className="card-slider">
            {
                    hotelList.map((el) =>
                <div className='Attraction-Cards' key={el.id}>
                    <img className='Attraction-Card-img'  src={el.image}  alt="" />
                    <div className="flex">
                        <p className="card-title">{el.title}</p>
                        <p className="card-titles">{el.star}</p>
                        <img src={star} alt="" className="star-logo" />
                    </div>
                    <div className="flex">
                        <img src={location} alt="" className="card-location-logo" />
                        <p className="card-location-titles">{el.location}</p>
                    </div>
                </div>
                    )}
            </div>
        </>
    )
}

export default HotelCards
