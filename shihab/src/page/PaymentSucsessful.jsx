import "../components/styles/style.css";
import "../components/styles/animation.css";

const PaymentSucsessful = () => {
    return (
        <div className='main'>
            <p className="payment-title">Payment Successful</p>
            <p className="loading-description">Please wait while we process your payment</p>
            <div className="loading-center">
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
            </div>
            
        </div>
    )
}

export default PaymentSucsessful