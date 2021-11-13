import location from '../card/images/location.svg';
import star from '../card/images/star.svg';
import buliding from '../card/images/buliding.svg';
import "../styles/style.css";

const FilterComponent = ({list}) => {
    return (
        <>
            <div className="card-slider">
            {
            list.map((el) =>
                <div className='Cards' key={el.id}>
                    <img className='Card-img' src={el.image} alt="" />
                    <div className="flex">
                        <p className="card-title">{el.title}</p>
                        <p className="card-titles">{el.star}</p>
                        <img src={star} alt="" className="star-logo" />
                    </div>
                    <div className="flex">
                        <img src={location} alt="" className="card-location-logo" />
                        <p className="card-location-titles">{el.location}</p>
                    </div>
                    <div className="flex">
                        <img src={buliding} alt="" className="card-buliding-icon" />
                        <p className="card-hotels-title">{el.type}</p>
                        <button className="card-price-btn"> ₹ {el.entryFee}</button>
                    </div>
                </div>
            )}
            </div>
        </>
    )
}

export default FilterComponent
