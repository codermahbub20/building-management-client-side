
import About from "../About/About";
import Banner from "../Banner/Banner";
// import GoogleMap from "../Map/Map";


const Home = () => {
    return (
       
            <div>
                <Banner></Banner>
                <About></About>
                {/* <GoogleMap></GoogleMap> */}
                <div className="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5496.837306991841!2d90.40445103982032!3d23.794346333811177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e90bb671d%3A0x7eab77d0896252c0!2sBanani%20Super%20Market!5e0!3m2!1sen!2sbd!4v1701061892822!5m2!1sen!2sbd" height="450"  className="w-full py-4" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        
    );
};

export default Home;