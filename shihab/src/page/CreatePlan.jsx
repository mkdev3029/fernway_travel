import "../components/styles/style.css";
import Text from '../components/icon/Text.svg';
import photo from '../components/icon/photo.svg';
import calender from '../components/icon/calendar.svg'
import wallet from '../components/icon/wallet.svg'

const CreatePlan = () => {

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
             
             <p className="content-title">Create your own plan</p>
             
            </div>

            <div className="container" >
                <div className="bodys">
                    <p className="big-titles">Fill the below details</p>
                    <p className="fill-title-1">Name your trip</p>
                    <div className="flex">
                        <div className="logo-div">
                        <img src={Text} alt="" className="Text-logo" />
                        </div>
                        <input type="text" className="name-input-box" />
                    </div>

                    <p className="fill-title-2">Enter Destination</p>

                    <div className="flex">
                        <div className="logo-div-2">
                        <img src={photo} alt="" className="photo-logo" />
                        </div>
                        <input type="text" className="destination-input-box" />
                    </div>
                   
                    <p className="fill-title-3"> +Add destination </p>
                    <p className="pickupdate-title-4"> Pick your dates </p>

                    <div className="flex">
                        <div className="logo-div-3">
                        <img src={calender} alt="" className="calender-logo" />
                        </div>
                        <input type="date" className="date-input-box" />
                    </div>

                    <div className="flex">
                        <div className="logo-div-4">
                        <img src={wallet} alt="" className="wallet-logo" />
                        </div>

                        <select name="budget" className="budget-selection-box">
                            <option value="5000">Pocket Friendly (less than 8k *)</option>
                            <option value="10000">Comfortable (8k - 12k *)</option>
                            <option value="20000">Lavish (more than 12k *)</option>
                        </select>
                        
                    </div>

                <button className="continue">Continue > </button>
                </div>
            
            </div>
        </>
    )
}

export default CreatePlan