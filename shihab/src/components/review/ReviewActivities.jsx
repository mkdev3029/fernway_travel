import image1 from "./image/person1.png";
import image2 from "./image/person2.png";
import location from '../Button/icons/location.svg';

const Review = () => {
    return (
        <>
         <div className='review'>
                <div className="flex">
                    <div className="review-photo">
                        <img src={image2} alt="" />
                    </div>
                    <div>
                        <div className="flex">
                            <p className="reveiew-name">Oishi Shah</p>
                            <p className="reveiew-base" >was in </p>
                            <img src={location} alt="" className="reveiew-location" />
                            <p className="reveiew-location-name">Van Vihar</p>
                        </div>
                        <p className="review-days">3d ago</p>
                        <div className="review-desc-divs">
                            <p className="review-desc">
                                It was probably one of the best feelings I have ever had. The ambience was quiet, nice and I got to meet many like-minded people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review'>
                <div className="flex">
                    <div className="review-photo">
                        <img src={image1} alt="" />
                    </div>
                    <div>
                        <div className="flex">
                            <p className="reveiew-name">Vivek Roy</p>
                            <p className="reveiew-base" >was in </p>
                            <img src={location} alt="" className="reveiew-location" />
                            <p className="reveiew-location-name">Solang Valley</p>
                        </div>
                        <p className="review-days">3d ago</p>
                        <div className="review-desc-divs">
                            <p className="review-desc">
                                It was probably one of the best feelings I have ever had. The ambience was quiet, nice and I got to meet many like-minded people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review