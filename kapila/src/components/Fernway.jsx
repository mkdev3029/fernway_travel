import './Fernway.css';
// import { NavLink } from 'react-router-dom';
import {Page2} from './Page2.jsx';

export const Fernway = () => {
    return (
        <div className="fernway">
            <div className="fernwayPartOne">
                <img src="https://www.linkpicture.com/q/Group-151.png" type="image"/>
            </div>

            <div className="fernwayPartTwo">
              <p className="fernwayLine0ne">fernway</p>
                <p className="fernwayLineTwo">Start Your Solo Journey With Us</p>
                
              <button className='getStarted'>Get Started  
                {/* <div > */}
                    {/* <img src="https://www.linkpicture.com/q/x.svg" type="image" className='getStartedArrow'></img> */}
                {/* </div> */}
                </button>
                
            </div>
        </div>
    );
}