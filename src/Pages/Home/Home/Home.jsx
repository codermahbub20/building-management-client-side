import Container from "../../../Shared/Container";
import About from "../About/About";
import Banner from "../Banner/Banner";
// import GoogleMap from "../Map/Map";


const Home = () => {
    return (
        <Container>
            <div>
                <Banner></Banner>
                <About></About>
                {/* <GoogleMap></GoogleMap> */}
            </div>
        </Container>
    );
};

export default Home;