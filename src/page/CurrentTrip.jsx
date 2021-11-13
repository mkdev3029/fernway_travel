import "../components/styles/style.css";
import Navbar from './Navbar'
const CheckInPage = () => {

    const imageUrl =
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

    const jsx = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${imageUrl})`
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
                <div className="bodys">
                    <p className="big-titles">Current Trip</p>

                    <div className="dashed-div">
                        <div className="dashed-div-text">There’s no ongoing trip right now</div>
                    </div>
                    <button className="pick-plan-btn">Pick a tour plan</button>
                    <button className="create-plan-btn">Create your own plan</button>

                    <div className="past-trip-title">Past Trips</div>
                    <Navbar />
                </div>
            
            </div>
        </>
    )
}

export default CheckInPage