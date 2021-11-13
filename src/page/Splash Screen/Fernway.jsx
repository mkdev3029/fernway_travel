import "./Fernway.css";
import { Link } from "react-router-dom";

export const Fernway = () => {
  return (
    <div className="fernway">
      <div className="fernwayPartOne">
        <img src="https://www.linkpicture.com/q/Group-151.png" type="image" />
      </div>

      <div className="fernwayPartTwo">
        <p className="fernwayLine0ne">fernway</p>
        <p className="fernwayLineTwo">Start Your Solo Journey With Us</p>
        <Link to="/fernway/splashscreen/page2">
          <button className="getStarted">Get Started</button>
        </Link>
      </div>
    </div>
  );
};
