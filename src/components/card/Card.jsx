import location from './images/location.svg';
import star from './images/star.svg';
import "../styles/style.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({Fetchlocation}) => {
    const [list,setList] = useState([]);

    useEffect(() =>{
            axios.get("http://localhost:3004/attraction-to-visit",{
                params:{
                    location: Fetchlocation       //mention location here
                }
            }).then(({data}) =>{
                setList([...data])
            })
    },[])

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
                <p className="card-location-time">Timing :</p>
                <p className="card-location-time">{el.timing}</p>
            </div>
            <div className="flex">
                <p className="card-location-time">Entry Fee: </p>
                <p className="card-location-time">{el.entryFee}</p>
            </div>
        </div>
        )}
        </div>
    </>
    )
}

export default Card
