

const About = () => {
    return (
        <div>
            <h1 className="sm:text-4xl md:text-5xl font-sansBalsmiq font-medium text-center">About    the  building</h1>
            <div className=" md:mt-5 md:p-10 gap-5 lg:flex">
                <div className="space-y-4 flex-1 lg:justify-end   flex-row-reverse items-center">
                    <h1 className="text-4xl font-sansBalsmiq font-semibold">More About For Our Building.......</h1>
                    <p className="text-start md:text-lg font-lora text-inherit">
                        Welcome to Harmony Residences, a beacon of modern living in the city center. Constructed with precision in 2015, our 20-story architectural masterpiece combines functionality with contemporary elegance. Each meticulously designed apartment within the tower reflects a commitment to luxurious urban living. At Harmony Residences, we prioritize your well-being, offering opulent amenities that redefine your lifestyle. From state-of-the-art fitness centers to rooftop gardens, every detail is crafted for your comfort and enjoyment. Our community is a sanctuary, with dedicated staff ensuring a secure and welcoming environment. Harmony Residences invites you to experience a harmonious blend of modernity and sophistication, where every day is an expression of urban luxury. Welcome to a life of comfort and style at Harmony Residences, your haven in the heart of the city.
                    </p>

                </div>

                <div className="flex-1 sm:mt-2">
                    <img className="md:w-3/4 rounded-lg" src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/single-listing/property_view_8.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;