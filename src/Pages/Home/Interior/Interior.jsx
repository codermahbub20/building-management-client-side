

const Interior = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-medium">FURNISHED INTERIORS</h1>
                <p className="text-xl">These facilites are well provided in all our constructions</p>
            </div>

            <div className="flex justify-center w-3/4 h-[80vh] space-y-3 mt-5  mx-auto">
                <div className="carousel  carousel-center  p-4 space-x-4 rounded-box">
                    <div className="carousel-item">
                        <img  src="https://dtsinglepro.wpengine.com/diaz-luxury-cottage/wp-content/uploads/sites/4/2016/11/gallery-receptiondesk.jpg" className="rounded-box   " />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dtsinglepro.wpengine.com/diaz-luxury-cottage/wp-content/uploads/sites/4/2016/11/gallery-living-room.jpg" className="rounded-box  " />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dtsinglepro.wpengine.com/wp-content/uploads/2016/11/gallery-kitchen.jpg" className="rounded-box  " />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dtsinglepro.wpengine.com/diaz-luxury-cottage/wp-content/uploads/sites/4/2016/11/gallery-garage.jpg" className="rounded-box  " />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dtsinglepro.wpengine.com/diaz-luxury-cottage/wp-content/uploads/sites/4/2016/11/gallery-receptiondesk.jpg" className="rounded-box  " />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dtsinglepro.wpengine.com/diaz-luxury-cottage/wp-content/uploads/sites/4/2016/11/gallery-living-room.jpg" className="rounded-box  " />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dtsinglepro.wpengine.com/wp-content/uploads/2016/11/gallery-kitchen.jpg" className="rounded-box  " />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Interior;