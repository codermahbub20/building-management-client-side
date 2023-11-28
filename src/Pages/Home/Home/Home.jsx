
import About from "../About/About";
import Banner from "../Banner/Banner";
import Coupon from "../Coupon/Coupon";
import Map from "../Map/Map";
// import GoogleMap from "../Map/Map";


const Home = () => {
    return (
       
            <div>
                <Banner></Banner>
                <About></About>
                <Coupon></Coupon>
                {/* <GoogleMap></GoogleMap> */}
                <Map></Map>
            </div>
        
    );
};

export default Home;