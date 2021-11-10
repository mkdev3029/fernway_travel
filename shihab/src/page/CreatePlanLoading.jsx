import "../components/styles/style.css";
import "../components/styles/animation.css";

const CreatePlanLoading = () => {
    return (
        <div className='main'>
            <p className="loading-title">Loading...</p>
            <p className="loading-description">Please wait while we create your tour plan </p>
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

export default CreatePlanLoading