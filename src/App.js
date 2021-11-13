import "./App.css";
import { Switch, Route } from "react-router-dom";
import Profile from "./page/profile";
import Home from "./page/Home";
import PickTourPlan from "./page/PickTourPlan";
import PickTourPlan2 from "./page/PickTourPlan2";
// SHIHAB IMPORTS
import TourPlan from "./page/TourPlan.jsx";
import TourPlan2 from "./page/TourPlan2";
import TourPlan3 from "./page/TourPlan3";
import Payment from "./page/Payment";
import PaymentSuccessful from "./page/payment/PaymentSuccessful";
import Destination from "./page/Destination";
import { Fernway } from "./page/Splash Screen/Fernway";
import { Page2 } from "./page/Splash Screen/Page2";
import { Page3 } from "./page/Splash Screen/Page3";
import { Page4 } from "./page/Splash Screen/Page4";
import { Interest } from "./page/Interests/interest";
import { Access } from "./page/Access/Access";
import SignUpPage1 from "./page/SignUpPage1";
import SignUpPage2 from "./page/SignUpPage2";
import OTP from "./page/OTP";
// import Dtodplan from "./page/Dtodplan";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* SPLASH SCREEE STARTS */}
        <Route path="/" exact>
          <Fernway />
        </Route>
        <Route path="/fernway/splashscreen/page2" exact>
          <Page2 />
        </Route>
        <Route path="/fernway/splashscreen/page3" exact>
          <Page3 />
        </Route>
        <Route path="/fernway/splashscreen/page4" exact>
          <Page4 />
        </Route>
        {/* SPLASH SCREEN ENDS */}

        {/* SIGNUP STARTS */}
        <Route path="/fernway/splashscreen/signuppage1" exact>
          <SignUpPage1 />
        </Route>
        <Route path="/fernway/splashscreen/signuppage1/signuppage2" exact>
          <SignUpPage2 />
        </Route>
        <Route path="/fernway/splashscreen/signuppage1/signuppage2/otp" exact>
          <OTP />
        </Route>
        {/* SIGNUP ENDS */}

        {/* INTERESTS STARTS */}
        <Route path="/fernway/interest" exact>
          <Interest />
        </Route>
        <Route path="/fernway/location_access" exact>
          <Access />
        </Route>
        {/* INTERESTS ENDS */}

        {/* HOME STARTS */}
        <Route path="/fernway/home/:locations" exact>
          <Home />
        </Route>
        <Route path="/fernway/mytrips/:locations" exact>
          <PickTourPlan />
        </Route>
        <Route path="/fernway/picktourplan" exact>
          <PickTourPlan2 />
        </Route>
        <Route path="/fernway/profile/:locations" exact>
          <Profile />
        </Route>
        {/* HOME ENDS */}

        {/* DETAILS STARTS*/}
        <Route path="/fernway/destination/:location" exact>
          <Destination />
        </Route>
        <Route path="/tourplan/:locations" exact>
          <TourPlan />
        </Route>

        {/* <Route path="/tourplan/:locations/dayplan/:locations" exact>
          <TourPlan2 />
          {/* <Dtodplan /> */}
        {/* </Route> */}

        <Route path="/tourplan/day-to-day-plan/reservation/:locations" exact>
          <TourPlan3 />
        </Route>

        <Route
          path="/tourplan/day-to-day-plan/reservation/Payment/:locations"
          exact
        >
          <Payment />
        </Route>

        <Route path="/fernway/paymentsuccessfull/:locations" exact>
          <PaymentSuccessful />
        </Route>
        {/* DETAILS ENDS */}
        {/* <Route path="/testing/dtodplan">
          <Dtodplan />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
