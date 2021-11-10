import "../components/styles/style.css";
import paypal from '../components/icon/paypal.svg';
import Start from '../components/icon/Start.svg';
import google from '../components/icon/google.svg';

const Payment = () => {

    const imageUrl =
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";

    const jsx = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
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
                <div className="flex">
                    <p className="big-titles">Payment</p>
                </div>


                <div className="flex payment-description-div">
                    <p className="payment-for">Train Ticket</p>
                    <p className="payment-price">₹ 141</p>
                </div>
                <div className="flex">
                    <p className="payment-for">Bus Ticket</p>
                    <p className="payment-price">₹ 741</p>
                </div>
                <div className="flex">
                    <p className="payment-for">Hostel Ticket</p>
                    <p className="payment-price">₹ 141</p>
                </div>

                <div className="flex">
                    <p className="payment-total">Amount to be paid</p>
                    <p className="total-payment-price">₹ 1541</p>
                </div>

                <div className="paypal-payment-btn">
                    <div className="flex align-center">
                    <img src={paypal} alt=""  className="paypal-logo"/>
                       <p> Pay with Paypal</p>
                       <img src={Start} alt="" className="start-logo" />
                    </div>
                </div>

                <div className="google-payment-btn">
                    <div className="flex align-center">
                    <img src={google} alt=""  className="paypal-logo" />
                       <p className="google-text"> Pay with Google</p>
                       <img src={Start} alt="" className="start-logo" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Payment