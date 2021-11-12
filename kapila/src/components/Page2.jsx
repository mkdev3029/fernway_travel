import './Page2.css';

export const Page2 = () => {
    return (
        <div className="pageTwo">

            <div className="pageTwoPartOne">
                <img src="https://www.linkpicture.com/q/Frame-152.png" type="image"/>
            </div>

            <div className="pageTwoPartTwo">
            <p className="pageTwoParaOne">Find the most accurate and reliable information about your travel Destination .</p>
            <div className='pageTwoFlex'>
                <div>Skip</div>
                    <div className='pageTwoSliderDiv'>
                        <div className='sliderDotFilled'></div> 
                        <div className='sliderDot'></div> 
                        <div className='sliderDot'></div> 
                    </div>
                <div>Next</div>
                </div>
            </div>
        </div>
    )
}
