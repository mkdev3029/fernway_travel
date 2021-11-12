import "../components/styles/Style2.css";
import OtpInput from "react-otp-input";
import { useState } from "react";

const OTP = () => {
    const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

    return (
        <div className='header'>
            <p className="verification-title">OTP Verification</p>
            <p className="otp-desc">Please enter the 4 digit verification code sent to +91 8777551294</p>

            <div className="center">

                <OtpInput
                    value={code}
                    onChange={handleChange}
                    numInputs={4}
                    separator={<span style={{ width: "8px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                        border: "1px solid black",
                        borderRadius: "16px",
                        background: "#FFFFFF",
                        width: "84px",
                        height: "84px",
                        fontSize: "30px",
                        color: "#000",
                        fontWeight: "400",
                        caretColor: "blue",
                        marginTop:"350px",
                    }}
                    focusStyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none"
                    }}
                />
            </div>
            <button className="otp-confirm">Sign-Up &#8594;</button>
            <p className="not-continue">Not working?</p><p className="cont-black"> Continue with Email</p>
        </div>
    )
}

export default OTP