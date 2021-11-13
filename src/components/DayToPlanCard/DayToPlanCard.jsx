import train from "../icon/Train.svg";

const DayToPlanCard = () => {
  return (
    <div className="plan-card">
      <img
        className="plan-Card-img"
        src="https://media.istockphoto.com/photos/kilchurn-sunset-picture-id622204296?k=20&m=622204296&s=612x612&w=0&h=7BDyJBiUqwjk2-GmdJgCJf7Xz9ZD4BgoXirJKyQdDTs="
        alt=""
      />
      <div className="flex">
        <div className="card-from-location">
          <p className="location-name">Howrah</p>
          <p className="location-time">6:30 am</p>
        </div>
        <div className="card-vehicle-logo">
          <img src={train} alt="" className="location-vehicle-logos" />
          <p className="location-vehicle-details">Train</p>
        </div>
        <div className="card-from-location">
          <p className="location-name">Bilaspur</p>
          <p className="location-time">2:30 pm</p>
        </div>
      </div>
    </div>
  );
};

export default DayToPlanCard;
