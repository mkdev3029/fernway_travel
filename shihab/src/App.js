import Destination from "./page/Destination";
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';
import TourPlan from "./page/TourPlan.jsx";
import TourPlan2 from "./page/TourPlan2";
import TourPlan3 from "./page/TourPlan3";
import Payment from "./page/Payment";
import PaymentCheck from './page/PaymentSucsessful.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Destination />
        </Route>
        <Route path="/tourplan/:locations" exact>
          <TourPlan />
        </Route>

        <Route path="/tourplan/:locations/dayplan/:locations" exact>
          <TourPlan2 />
        </Route>

        <Route path="/tourplan/day-to-day-plan/reservation" exact>
          <TourPlan3 />
        </Route>

        <Route path="/tourplan/day-to-day-plan/reservation/Payment" exact>
          <Payment />
        </Route>

        <Route path="/tourplan/day-to-day-plan/reservation/Payment/PaymentCheck" exact>
          <PaymentCheck />
        </Route>

      </Switch>
    </BrowserRouter>
    </div >
  );
}

export default App;
