import './Page2.css';

export const Page4 = () => {
    return (
        <div className="pageTwo">

            <div className="pageTwoPartOne">
                <img src="https://www.linkpicture.com/q/Frame-154.png" type="image"/>
            </div>

            <div className="pageTwoPartTwo">
            <p className="pageTwoParaOne">Solo Portal to share your journey experiences and stories with everyone.</p>
            <div className='pageTwoFlex'>
                <div>Skip</div>
                    <div className='pageTwoSliderDiv'>
                        <div className='sliderDot'></div> 
                        <div className='sliderDot'></div> 
                        <div className='sliderDotFilled'></div> 
                    </div>
                <div>Next</div>
                </div>
            </div>
        </div>
    )
}
