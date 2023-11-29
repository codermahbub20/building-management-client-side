import Lottie from "lottie-react";
import error from '../../../public/error.json'
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div>
            <Link to="/"><button className="btn btn-secondary text-xl">Go Back To Home</button></Link>
            <Lottie animationData={error}></Lottie>
        </div>
    );
};

export default ErrorPage;