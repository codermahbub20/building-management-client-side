
import About from "../About/About";
import Banner from "../Banner/Banner";
import Map from "../Map/Map";
// import GoogleMap from "../Map/Map";


const Home = () => {
    return (
       
            <div>
                <Banner></Banner>
                <About></About>
                {/* <GoogleMap></GoogleMap> */}
                <Map></Map>
            </div>
        
    );
};

export default Home;