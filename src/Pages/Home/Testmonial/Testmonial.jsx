import { FaQuoteRight } from "react-icons/fa";

const Testmonial = () => {
    return (
        <div className="mt-10">
            <div className="text-center ">
                <h3 className="text-xl font-medium">TESTIMONIALS</h3>
                <h1 className="text-3xl font-medium">Our Customer Says</h1>
            </div>

            <div className="grid sm:grid-cols-1 gap-10 mt-5 w-3/4 mx-auto md:grid-cols-2 lg:grid-cols-3 ">
                <div className="card  space-y-3 p-5 card-compact w-96 bg-base-100 shadow-xl">
                    <figure className="flex justify-start"><FaQuoteRight></FaQuoteRight></figure>
                    <div className="card-body">
                        <div className="flex flex-col mt-3 items-center pb-10">
                            <img className="w-24 h-24  rounded-full shadow-lg" src="https://prorange.ancorathemes.com/wp-content/uploads/2022/10/testimonial-image4-copyright-150x150.jpg" alt="Bonnie image" />
                            <h5 className=" text-xl font-medium text-gray-900 dark:text-white">John Lee</h5>
                        </div>
                        <p>Our experience with West Co has been outstanding. Their proactive approach to building management has significantly improved the overall efficiency and resident satisfaction at Greenview Towers. The team is responsive, professional, and truly understands the unique challenges of property management.</p>
                    
                    </div>
                </div>
                <div className="card  space-y-3 p-5 card-compact w-96 bg-base-100 shadow-xl">
                    <figure className="flex justify-start"><FaQuoteRight></FaQuoteRight></figure>
                    <div className="card-body">
                        <div className="flex flex-col mt-3 items-center pb-10">
                            <img className="w-24 h-24  rounded-full shadow-lg" src="https://prorange.ancorathemes.com/wp-content/uploads/2022/10/testimonial-image1-copyright-150x150.jpg" alt="Bonnie image" />
                            <h5 className=" text-xl font-medium text-gray-900 dark:text-white">Gillian Caldwell</h5>
                        </div>
                        <p>Choosing WestCo for our condominium management was a game-changer. Their attention to detail, transparent communication, and dedication to enhancing property value have exceeded our expectations. Working with them has been a pleasure, and I highly recommend their services.</p>
                    
                    </div>
                </div>
                <div className="card  space-y-3 p-5 card-compact w-96 bg-base-100 shadow-xl">
                    <figure className="flex justify-start"><FaQuoteRight></FaQuoteRight></figure>
                    <div className="card-body">
                        <div className="flex flex-col mt-3 items-center pb-10">
                            <img className="w-24 h-24  rounded-full shadow-lg" src="https://prorange.ancorathemes.com/wp-content/uploads/2022/10/testimonial-image3-copyright-150x150.jpg" alt="Bonnie image" />
                            <h5 className=" text-xl font-medium text-gray-900 dark:text-white">Felicia Garrett</h5>
                        </div>
                        <p>Our experience with West Co has been outstanding. Their proactive approach to building management has significantly improved the overall efficiency and resident satisfaction at Greenview Towers. The team is responsive, professional, and truly understands the unique challenges of property management.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testmonial;